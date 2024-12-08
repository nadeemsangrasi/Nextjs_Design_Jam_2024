"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { useForm } from "react-hook-form";
const Login = () => {
  const form = useForm();
  return (
    <div className="flex justify-center items-center  flex-wrap">
      <div className="space-y-4 py-28 px-6 md:px-0 grid grid-flow-col-1 place-content-center md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Login */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Log In</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="username" className="block font-medium mb-2">
                Username or email address
              </label>
              <input
                type="text"
                id="username"
                {...form.register("username")}
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder=""
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...form.register("password")}
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder=""
              />
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  {...form.register("rememberMe")}
                  className="mr-2  focus:ring-blue-500 "
                />
                Remember me
              </label>
            </div>
            <div>
              <Button
                type="submit"
                className=" bg-transparent hover:bg-transparent text-black border border-black hover:border-black w-fit py-6 px-16 rounded-lg"
              >
                Log In
              </Button>
              <Link href="#" className="text-gray-500 hover:underline px-4">
                Lost Your Password?
              </Link>
            </div>
          </form>
        </div>

        {/* Register */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block font-medium mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                {...form.register("email")}
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder=""
              />
            </div>
            <p className="text-gray-500">
              A link to set a new password will be sent to your email address.
            </p>
            <p className="text-gray-500">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <strong className="text-black"> privacy policy.</strong>
            </p>
            <Button
              type="submit"
              className=" bg-transparent hover:bg-transparent text-black border border-black hover:border-black w-fit py-6 px-16 rounded-lg"
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
