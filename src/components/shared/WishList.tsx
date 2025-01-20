"use client";
import React, { useState } from "react";
import icon from "@/assets/icons/Vector (1).png";
import Image from "next/image";
import Link from "next/link";

import { useCartStore } from "@/context/store/CartStore";
import { ICartStore, IWishList } from "@/types/types";
function WishList() {
  const [isWishListVisible, setIsWishListVisible] = useState(false);
  const { wishList, removeFromWishList } = useCartStore() as ICartStore;

  const toggleWishList = () => {
    setIsWishListVisible(!isWishListVisible);
  };

  return (
    <div className="relative ">
      <button
        onClick={toggleWishList}
        className="text-black p-2 hover:bg-gray-200 rounded flex items-center justify-center gap-2"
        aria-label="Toggle Shopping Cart"
      >
        <span className="text-xl font-bold">{wishList.length}</span>
        <Image src={icon} alt="image cart" />
      </button>

      <div
        className={`z-[100] fixed top-0 right-0 h-[500px] py-4 bg-white shadow-lg transition-transform duration-300 ${
          isWishListVisible ? "translate-x-0" : "translate-x-full"
        } w-[330px] md:w-[420px]`}
      >
        <div className="p-4 overflow-y-auto h-full flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">WishList</h2>
            <hr />
            <div className="space-y-4">
              {wishList.map((c: IWishList) => (
                <div className="flex justify-between items-center" key={c.id}>
                  <div className="flex">
                    <Image
                      src={c.productImage}
                      height={1000}
                      width={1000}
                      alt="Asgaard Sofa"
                      className="w-[100px] h-[100px] object-center"
                    />
                    <div className="ml-4">
                      <h3 className="mt-8 font-medium">{c.productTitle}</h3>
                      <p className="my-2">
                        1 x{" "}
                        <span className="text-yellow-600">
                          {c.productPrice}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-400 h-[22px] -mt-6  w-[26px] text-white rounded-full flex justify-center items-center cursor-pointer">
                    <span
                      className="p-0.5  font-medium"
                      onClick={() => removeFromWishList(c.id)}
                    >
                      x
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr />
          <div className="mt-4 flex justify-around mx-auto gap-4">
            <Link href="/cart">
              <button className="rounded-full text-black  bg-white  px-8 py-2 border border-black">
                View Cart
              </button>
            </Link>
          </div>
        </div>
        <button
          onClick={toggleWishList}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close Cart"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default WishList;
