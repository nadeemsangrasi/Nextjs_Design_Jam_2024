import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { icons, links } from "@/data/data";
import { IIcons, ILinks } from "@/types/types";
import { Menu } from "lucide-react";
import Image from "next/image";

import Link from "next/link";
import ShoppingCart from "./CartSideBar";

export default function SideBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="z-[80]">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="z-[99]">
        <div className="mx-auto sm:mx-0">
          <nav className="flex flex-col gap-4">
            {links.map((l: ILinks) => (
              <Link
                key={l.label}
                href={l.url}
                className="font-medium text-[16px]"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center  gap-10 mt-5 flex-wrap ">
            {icons.map((myIcon: IIcons) => (
              <Link key={myIcon.link} href={myIcon.link}>
                <Image src={myIcon.icon} alt="header-icon" />
              </Link>
            ))}
            <ShoppingCart />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
