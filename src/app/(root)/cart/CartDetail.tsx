import { Carts, SubTotal } from "./CartClient";

export default function CartDetail() {
  return (
    <div className="p-4 md:p-8">
      <div className="max-w-7xl mx-auto ">
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
                <Carts />
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <SubTotal />
        </div>
      </div>
    </div>
  );
}
