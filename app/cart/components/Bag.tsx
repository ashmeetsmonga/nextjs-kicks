"use client";

import Image from "next/image";
import React from "react";
import CartItem from "./CartItem";
import { useShoeStore } from "@/app/store/useShoeStore";

const Bag = () => {
  const cartItems = useShoeStore((state) => state.cartItems);

  return (
    <div className="flex w-full flex-col gap-3 rounded-xl bg-white p-4 md:w-3/5">
      <h2 className="text-2xl font-semibold md:text-4xl">Your Bag</h2>
      <p>Items in your bag are not reserved. Checkout now to make them yours</p>
      {cartItems.map((cartItem, idx) => (
        <CartItem key={idx} item={cartItem} />
      ))}
    </div>
  );
};

export default Bag;
