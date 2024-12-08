import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function Footer() {
  return (
    <footer className="">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm leading-6 text-muted-foreground text-custom-gray">
              400 University Drive Suite 200 Coral GObles,
              <br />
              FL 33134 USA
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-custom-gray">
              Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm  font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-sm  font-medium">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm  font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm  font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-custom-gray">
              Help
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm  font-medium">
                  Payment Options
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm  font-medium">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm  font-medium">
                  Privacy Policies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-custom-gray">
              Newsletter
            </h3>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter Your Email Address "
                className="text-sm outline-none border-none underline underline-offset-4 focus:outline-none focus:ring-0"
              />
              <Button
                variant="outline"
                size="sm"
                className="whitespace-nowrap border-none  underline underline-offset-[8px] hover:bg-transparent font-bold text-[16px] "
              >
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t pt-8">
          <p className="text-sm  font-medium">
            2022 Meubel House. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
