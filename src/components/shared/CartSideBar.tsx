"use client";
import React, { useState } from "react";
import icon from "@/assets/icons/Vector.png";
import Image from "next/image";
import Link from "next/link";

import { useCartStore } from "@/context/store/CartStore";
import { ICart, ICartStore } from "@/types/types";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";

function ShoppingCart() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const { cart, totalAmount, removeFromCart } = useCartStore() as ICartStore;
  const { user } = useUser();

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  const handleCheckout = async () => {
    try {
      const response = await axios.post("/api/checkout", {
        carts: cart.map((item: ICart) => {
          return {
            id: item.id,
            price: item.productPrice,
            quantity: item.quantity,
            productId: item.productId,
            name: item.productTitle,
          };
        }),
      });
      if (response.status == 200) {
        localStorage.setItem(`cart_${user?.id}`, JSON.stringify([]));
      }
      window.location = response.data.url;
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error("Failed to submit review", axiosError);
      const errorMessage = axiosError?.response?.data as { message: string };
      toast.error(errorMessage?.message || "An error occurred");
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleCart}
        className="text-black p-2 hover:bg-gray-200 rounded flex items-center justify-center gap-2"
        aria-label="Toggle Shopping Cart"
      >
        <span className="text-xl font-bold">{cart?.length}</span>
        <Image src={icon} alt="image cart" />
      </button>

      <div
        className={`z-[100] fixed top-0 right-0 h-[500px] py-4 bg-white shadow-lg transition-transform duration-300 ${
          isCartVisible ? "translate-x-0" : "translate-x-full"
        } w-[330px] md:w-[420px]`}
      >
        <div className="p-4 overflow-y-auto h-full flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
            <hr />

            <div className="space-y-4">
              {cart?.map((c: ICart) => (
                <div className="flex justify-between items-center" key={c?.id}>
                  <div className="flex">
                    <Image
                      src={c?.productImage}
                      height={150}
                      width={150}
                      alt="Asgaard Sofa"
                      className="w-[100px] h-[100px] object-center"
                    />
                    <div className="ml-4">
                      <h3 className="mt-8 font-medium">{c?.productTitle}</h3>
                      <p className="my-2">
                        1 x{" "}
                        <span className="text-yellow-600">
                          {c?.productPrice}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-400 h-[22px] -mt-6  w-[26px] text-white rounded-full flex justify-center items-center cursor-pointer">
                    <span
                      className="p-0.5  font-medium"
                      onClick={() => removeFromCart(c?.id)}
                    >
                      x
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p className="ml-8 my-2">
                <span className="text-yellow-600">${totalAmount}</span>
              </p>
            </div>
            <hr />
            <div className="mt-4 flex justify-around mx-auto gap-4">
              <Link href="/cart">
                <button className="rounded-full text-black  bg-white  px-8 py-2 border border-black">
                  View Cart
                </button>
              </Link>

              <button
                onClick={handleCheckout}
                className="rounded-full text-black  bg-white  px-8 py-2 border border-black"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={toggleCart}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close Cart"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;
