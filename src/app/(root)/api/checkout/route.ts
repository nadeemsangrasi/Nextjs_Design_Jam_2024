import { stripe } from "@/lib/stripe";
import { client } from "@/sanity/lib/client";

import { currentUser } from "@clerk/nextjs/server";
import { createClient } from "next-sanity";

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type,Authorization",
  "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,OPTIONS",
};
interface IServerCart {
  id: string;
  price: string;
  quantity: string;
  productId: string;
  name: string;
}
export const OPTIONS = async () => {
  return NextResponse.json({}, { headers: corsHeaders });
};

export const POST = async (req: NextRequest) => {
  const user = await currentUser();
  if (!user?.id) {
    console.log("user unauthenticated");
    return NextResponse.json(
      { success: false, message: "user unauthenticated" },
      { status: 403 }
    );
  }
  const { carts }: { carts: IServerCart[] } = await req.json();
  if (!carts || carts.length === 0) {
    console.log("all fields are required");
    return NextResponse.json(
      { success: false, message: "all fields are required" },
      { status: 400 }
    );
  }

  try {
    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] =
      carts.map((cart: IServerCart) => ({
        quantity: 1,
        price_data: {
          currency: "usd",
          product_data: {
            name: cart?.name,
          },
          unit_amount: Number(cart?.price) * 100,
        },
      }));

    const chrs =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const nanoId = (len: number) =>
      [...Array(len)]
        .map(() => chrs[Math.floor(Math.random() * chrs.length)])
        .join("");
    const orderId = nanoId(10);
    const order = await client.createOrReplace({
      _type: "order",
      _id: orderId,
      customerInfo: {
        name: user?.fullName,
        email: user?.emailAddresses[0].emailAddress,
        address: null,
      },
      paymentStatus: "pending",
      productDetails: carts.map((product: IServerCart) => ({
        productId: product.productId,
        quantity: product.quantity,
        price: product.price,
      })),
    });

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      billing_address_collection: "required",
      phone_number_collection: {
        enabled: true,
      },
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/cart?success=1`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/cart?success=0`,
      metadata: {
        userId: user?.id,
        orderId: order._id,
      },
    });

    return NextResponse.json({ url: session.url }, { headers: corsHeaders });
  } catch (error) {
    const err = error as Error;
    console.log("Error checkout", err);
    return NextResponse.json(
      { success: false, message: "Error occured during checkout" },
      { status: 500 }
    );
  }
};
