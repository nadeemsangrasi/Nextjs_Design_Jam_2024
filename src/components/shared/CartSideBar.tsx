"use client";
import React, { useState } from "react";
import icon from "@/assets/icons/Vector.png";
import Image from "next/image";
import Link from "next/link";
import img from "@/assets/images/shop/Maya sofa three seater 1.png";
function ShoppingCart() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleCart}
        className="text-black p-2 hover:bg-gray-200 rounded"
        aria-label="Toggle Shopping Cart"
      >
        <Image src={icon} alt="image cart" />
      </button>

      <div
        className={`fixed top-0 right-0 h-[500px] py-4 bg-white shadow-lg transition-transform duration-300 ${
          isCartVisible ? "translate-x-0" : "translate-x-full"
        } w-[330px] md:w-[420px]`}
      >
        <div className="p-4 overflow-y-auto h-full flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
            <hr />

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex">
                  <Image
                    src={img}
                    height={150}
                    width={150}
                    alt="Asgaard Sofa"
                    className="object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="mt-8 font-medium">Asgaard Sofa</h3>
                    <p className="my-2">
                      1 x{" "}
                      <span className="text-yellow-600">Rs. 250.000.00</span>
                    </p>
                  </div>
                </div>
                <div className="bg-gray-500 h-[30px] w-[30px] text-white rounded-full flex justify-center items-center cursor-pointer">
                  <span className="p-0.5 text-xl font-medium">x</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p className="ml-8 my-2">
                <span className="text-yellow-600">Rs. 250.000.00</span>
              </p>
            </div>
            <hr />
            <div className="mt-4 flex justify-around mx-auto gap-4">
              <Link href="/cart">
                <button className="rounded-full text-black  bg-white  px-8 py-2 border border-black">
                  View Cart
                </button>
              </Link>
              <Link href="/checkout">
                <button className="rounded-full text-black  bg-white  px-8 py-2 border border-black">
                  Checkout
                </button>
              </Link>
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
