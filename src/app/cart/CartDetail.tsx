import img from "@/assets/images/Asgaard sofa 1.png";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartDetail() {
  return (
    <div className="p-4 md:p-8">
      <div className="max-w-7xl mx-auto pt-20">
        {/* Cart Section */}
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Cart Table */}
          <div className="flex-1 overflow-x-auto">
            <table className="w-full bg-white">
              <thead className="bg-yellow-50 text-gray-700">
                <tr>
                  <th className="text-left p-4">Product</th>
                  <th className="text-left p-4">Price</th>
                  <th className="text-left p-4">Quantity</th>
                  <th className="text-left p-4">Subtotal</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                      <Image
                        src={img}
                        alt="Asgaard sofa"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <span className="text-gray-700">Asgaard sofa</span>
                  </td>
                  <td className="p-4 text-gray-700">Rs. 250,000.00</td>
                  <td className="p-4">
                    <input
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="w-16 p-2 border border-gray-300 rounded-lg text-center"
                    />
                  </td>
                  <td className="p-4 text-gray-700">Rs. 250,000.00</td>
                  <td className="p-4">
                    <button className="text-red-200">
                      <Trash2 />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <div className="mt-8 md:mt-0 md:w-1/3">
            <div className="bg-yellow-50 pt-6 pb-12 px-6 sm:px-8 md:px-12 rounded-lg shadow-md space-y-8">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-14 text-center">
                Cart Totals
              </h2>
              <div className="flex justify-between mb-2 text-gray-600">
                <span>Subtotal</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between font-bold text-lg text-gray-700">
                <span>Total</span>
                <span className="text-orange-600">Rs. 250,000.00</span>
              </div>
              <button className="mt-4 py-2 px-6 sm:px-12 border-2 border-black rounded-lg w-full md:w-fit mx-auto block">
                <Link href={"/checkout"}>Check Out</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
