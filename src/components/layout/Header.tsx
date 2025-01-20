"use client";

import React from "react";
import Link from "next/link";
import Wrapper from "../shared/Wrapper";
import { ILinks } from "@/types/types";
import { links } from "@/data/data";
import SideBar from "../shared/SideBar";
import ShoppingCart from "../shared/CartSideBar";
import { UserButton, useUser } from "@clerk/nextjs";
import WishList from "../shared/WishList";
import { LogIn, LogOut } from "lucide-react";

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="bg-custom-light-orange ">
      <Wrapper>
        <header className=" flex items-center justify-end  py-[36px] h-[100px] gap-x-[11.2rem] px-16 fixed right-10 z-[99] ">
          <div className="lg:hidden absolute right-0">
            <SideBar />
          </div>
          <nav className="hidden lg:flex  gap-[4rem]">
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
          <div className="hidden lg:flex items-center  gap-x-[2rem]">
            <WishList />
            <ShoppingCart />
            {!isSignedIn ? (
              <Link href={"/sign-in"}>
                <LogIn />
              </Link>
            ) : (
              <UserButton />
            )}
          </div>
        </header>
      </Wrapper>
    </div>
  );
};

export default Header;
