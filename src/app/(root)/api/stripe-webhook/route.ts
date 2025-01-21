import { stripe } from "@/lib/stripe";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export const POST = async (req: Request) => {
  const body = await req.text();
  const signature = req.headers.get("Stripe-Signature") as string;
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    console.error("❌ Webhook signature verification failed:", error);
    return NextResponse.json(
      { success: false, message: "Invalid signature" },
      { status: 400 }
    );
  }

  try {
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const orderId = session?.metadata?.orderId;
      const userId = session?.metadata?.userId;

      if (!orderId || !userId) {
        return NextResponse.json(
          { success: false, message: "Missing order ID or user ID" },
          { status: 400 }
        );
      }

      // Update order with address and payment status
      const address = session.customer_details?.address as Stripe.Address;
      const addressString = [
        address.line1,
        address.line2,
        address.city,
        address.state,
        address.country,
        address.postal_code,
      ]
        .filter(Boolean)
        .join(", ");

      // First, get the order details
      const order = await client.fetch(
        `*[_type == "order" && _id == $orderId][0]{
          _id,
          productDetails[]{
            productId,
            quantity
          }
        }`,
        { orderId }
      );

      if (!order) {
        return NextResponse.json(
          { success: false, message: "Order not found" },
          { status: 404 }
        );
      }

      // Update order status
      await client
        .patch(orderId)
        .set({
          "customerInfo.address": addressString,
          paymentStatus: "paid",
        })
        .commit();

      for (const product of order.productDetails) {
        try {
          // Log the product details for debugging
          console.log("Processing product:", product);

          // Changed query to use _id instead of id
          const currentProduct = await client.fetch(
            `*[_type == "product" && _id == $productId][0]{
                _id,
                name,
                stockLevel
              }`,
            { productId: product.productId }
          );

          // Log the found product for debugging
          console.log("Found product:", currentProduct);

          if (!currentProduct) {
            console.error(`Product not found: ${product.productId}`);
            continue;
          }

          const newStockLevel = Math.max(
            0,
            Number(currentProduct.stockLevel) - Number(product.quantity)
          );

          // Update stock level
          await client
            .patch(product.productId)
            .set({
              stockLevel: newStockLevel,
            })
            .commit();
        } catch (error) {
          console.error(
            `Failed to update stock for product ${product.productId}:`,
            error
          );
          // Log more error details
          if (error instanceof Error) {
            console.error("Error details:", error.message);
          }
        }
      }

      console.log("✅ Order processed successfully");
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("❌ Error processing webhook:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
};
