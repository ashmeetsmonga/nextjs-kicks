"use client";

import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { BiSolidUser } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import NavbarMenu from "./NavbarMenu";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  return (
    <div className="mb-6 w-full">
      <div className="flex w-full items-center justify-between rounded-xl bg-white p-4 md:px-6">
        <button className="w-1/3 md:hidden">
          {!showMenu && (
            <LuMenu
              onClick={() => setShowMenu(true)}
              size={25}
              className="cursor-pointer"
            />
          )}
          {showMenu && (
            <>
              <AiFillCloseCircle
                size={25}
                className="cursor-pointer"
                onClick={() => setShowMenu(false)}
              />
              <NavbarMenu />
            </>
          )}
        </button>
        <div className="hidden w-1/3 gap-6 md:flex">
          <Link href="/">
            <div className="cursor-pointer">Home</div>
          </Link>
          <Link href="/menu/shoes">
            <div className="cursor-pointer">Shoes</div>
          </Link>
        </div>
        <div className="w-1/3 text-center text-3xl font-extrabold">
          <span onClick={() => router.push("/")} className="cursor-pointer">
            KICKS
          </span>
        </div>
        <div className="flex w-1/3 items-center justify-end gap-2 md:gap-6">
          {/* <BiSolidUser size={25} /> */}
          <BsFillCartFill
            onClick={() => router.push("/cart")}
            size={25}
            className="cursor-pointer text-theme-yellow"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
