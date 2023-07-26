"use client";

import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { BiSolidUser } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

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
          <div className="cursor-pointer">Life Style Shoes</div>
          <div className="cursor-pointer">Basketball Shoes</div>
        </div>
        <div className="w-1/3 text-center text-3xl font-extrabold">
          {/* KI<span className='text-stroke-3 relative z-10'>C</span>
					<span className='-ml-1'>KS</span> */}
          KICKS
        </div>
        <div className="flex w-1/3 items-center justify-end gap-2 md:gap-6">
          <BiSolidUser size={25} />
          <BsFillCartFill size={22} className="text-theme-yellow" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
