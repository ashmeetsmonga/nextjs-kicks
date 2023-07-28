import Link from "next/link";
import React from "react";

const NavbarMenu = () => {
  return (
    <div className="absolute left-10 top-28 z-10 flex flex-col items-start gap-4 rounded-lg bg-white p-4 shadow-2xl">
      <Link href="/menu/life-style-shoes">Life Style Shoes</Link>
      <Link href="/menu/basketball-shoes">Basketball Shoes</Link>
    </div>
  );
};

export default NavbarMenu;
