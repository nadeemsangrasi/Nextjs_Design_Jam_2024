"use client";
import { useCartStore } from "@/context/store/CartStore";
import { ICart, ICartStore } from "@/types/types";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export const Carts = () => {
  const {
    cart,
    totalAmount,
    handleCartIncrement,
    handleCartDecrement,
    removeFromCart,
  } = useCartStore() as ICartStore;

  return (
    <>
      {cart.map((c: ICart) => (
        <tr key={c.id}>
          <td className="p-4 flex items-center space-x-4">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center">
              <Image
                src={c.productImage}
                alt="Asgaard sofa"
                className="w-full h-full object-cover rounded-lg"
                width={1000}
                height={1000}
              />
            </div>
            <span className="text-gray-700">{c.productTitle}</span>
          </td>
          <td className="p-4 text-gray-700">${c.productPrice}</td>
          <td className="p-4">
            <div className="flex items-center border border-gray-200 rounded-lg">
              <button
                onClick={() => handleCartDecrement(c.id)}
                className="px-4 py-2 text-lg"
              >
                -
              </button>
              {c.quantity}
              <button
                onClick={() => handleCartIncrement(c.id)}
                className="px-4 py-2 text-lg"
              >
                +
              </button>
            </div>
          </td>
          <td className="p-4 text-gray-700">${totalAmount}</td>
          <td className="p-4">
            <button className="text-red-200">
              <Trash2 onClick={() => removeFromCart(c.id)} />
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export const SubTotal = () => {
  const { totalAmount } = useCartStore() as ICartStore;
  return (
    <div className="mt-8 md:mt-0 md:w-1/3">
      <div className="bg-yellow-50 pt-6 pb-12 px-6 sm:px-8 md:px-12 rounded-lg shadow-md space-y-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-14 text-center">
          Cart Totals
        </h2>
        <div className="flex justify-between mb-2 text-gray-600">
          <span>Subtotal</span>
          <span>${totalAmount}</span>
        </div>
        <div className="flex justify-between font-bold text-lg text-gray-700">
          <span>Total</span>
          <span className="text-orange-600">${totalAmount}</span>
        </div>
        <button className="mt-4 py-2 px-6 sm:px-12 border-2 border-black rounded-lg w-full md:w-fit mx-auto block">
          <Link href={"/checkout"}>Check Out</Link>
        </button>
      </div>
    </div>
  );
};
