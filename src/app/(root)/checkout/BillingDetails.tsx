import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BillingDetails() {
  return (
    <div className="  px-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section - Billing Details */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Billing details</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium text-gray-700">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700">
                  Country / Region
                </label>
                <select className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Sri Lanka</option>
                  <option>India</option>
                  <option>USA</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-gray-700">
                  Street Address
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="House number and street name"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700">
                  Town / City
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-gray-700">
                    Province
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Western Province</option>
                    <option>Central Province</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium text-gray-700">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700">
                  Additional Information
                </label>
                <textarea
                  rows={8}
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                ></textarea>
              </div>
            </form>
          </div>
          <div>
            <div className=" flex items-center justify-center  px-4">
              <div className="w-full max-w-md bg-white  ">
                {/* Header Section */}
                <div className="border-b border-gray-300 pb-4">
                  <div className="flex justify-between  font-semibold text-xl">
                    <span>Product</span>
                    <span>Subtotal</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="font-normal text-custom-gray">
                      Asgaard sofa <span className="text-black">x 1</span>{" "}
                    </span>
                    <span className="font-normal">Rs. 250,000.00</span>
                  </div>
                  <div className="flex justify-between mt-4 text-sm font-medium ">
                    <span>Subtotal</span>
                    <span>Rs. 250,000.00</span>
                  </div>
                  <div className="flex justify-between mt-2 text-lg font-bold ">
                    <span>Total</span>
                    <span className="text-[#B88E2F]">Rs. 250,000.00</span>
                  </div>
                </div>

                {/* Payment Method Section */}
                <div className="mt-6">
                  <h3 className="text-base font-medium text-gray-800">
                    <span className="h-3 w-3 inline-block  bg-black rounded-full mr-2"></span>{" "}
                    Direct Bank Transfer
                  </h3>
                  <p className="text-sm text-custom-gray mt-2">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                  <div className="mt-4 space-y-4">
                    {/* Direct Bank Transfer Option */}
                    <div className="flex items-center">
                      <input
                        id="bank-transfer"
                        type="radio"
                        name="payment-method"
                        className="w-4 h-4  text-custom-gray"
                        defaultChecked
                      />
                      <label
                        htmlFor="bank-transfer"
                        className="ml-2 text-sm text-custom-gray"
                      >
                        Direct Bank Transfer
                      </label>
                    </div>

                    {/* Cash on Delivery Option */}
                    <div className="flex items-center">
                      <input
                        id="cash-on-delivery"
                        type="radio"
                        name="payment-method"
                        className="w-4 h-4 text-custom-gray"
                      />
                      <label
                        htmlFor="cash-on-delivery"
                        className="ml-2 text-sm text-custom-gray   "
                      >
                        Cash On Delivery
                      </label>
                    </div>
                  </div>
                </div>

                {/* Privacy Policy Section */}
                <p className="text-xs text-gray-500 mt-6 leading-relaxed">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <Link href="#" className="font-bold text-black">
                    privacy policy
                  </Link>
                  .
                </p>

                {/* Place Order Button */}
                <div className="mt-6 flex items-center justify-center">
                  <Button
                    type="submit"
                    className="  bg-transparent hover:bg-transparent text-black border border-black hover:border-black w-fit py-4 px-16 rounded-lg"
                  >
                    Place Order
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
