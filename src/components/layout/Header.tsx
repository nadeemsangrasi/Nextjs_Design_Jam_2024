import Image from "next/image";
import React from "react";
import Link from "next/link";
import Wrapper from "../shared/Wrapper";
import { IIcons, ILinks } from "@/types/types";
import { icons, links } from "@/data/data";
import SideBar from "../shared/SideBar";
import ShoppingCart from "../shared/CartSideBar";

const Header = () => {
  return (
    <div className="bg-custom-light-orange ">
      <Wrapper>
        <header className=" flex items-center justify-end  py-[36px] h-[100px] gap-x-[11.2rem] px-16 fixed right-10 z-[99] ">
          <div className="lg:hidden absolute right-0">
            <SideBar />
          </div>
          <nav className="hidden lg:flex  gap-[5rem]">
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
          <div className="hidden lg:flex items-center  gap-x-[3rem]">
            {icons.map((myIcon: IIcons) => (
              <Link key={myIcon.link} href={myIcon.link}>
                <Image src={myIcon.icon} alt="header-icon" />
              </Link>
            ))}
            <ShoppingCart />
          </div>
        </header>
      </Wrapper>
    </div>
  );
};

export default Header;
