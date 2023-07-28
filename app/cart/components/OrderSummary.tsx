"use client";

import { useShoeStore } from "@/app/store/useShoeStore";
import React from "react";
import shoesList from "@/app/data.json";

const OrderSummary = () => {
  const cartItems = useShoeStore((state) => state.cartItems);

  let price = 0;
  for (let cartItem of cartItems) {
    let product = shoesList.find((shoe) => shoe.id === cartItem.productId);
    price += parseInt(product?.pricesMax as string) * 100;
  }

  return (
    <div className="flex w-full flex-col gap-3 rounded-xl bg-white p-4 md:w-2/5 md:bg-transparent">
      <h1 className="text-2xl font-semibold md:text-4xl">Order Summary</h1>
      <div className="flex w-full justify-between">
        <p>{cartItems.length} Item</p>
        <p>{price}</p>
      </div>
      <div className="flex w-full justify-between">
        <p>Delivery</p>
        <p>100</p>
      </div>
      <div className="flex w-full justify-between">
        <p>Tax</p>
        <p>{Math.floor(price * (1 / 10))}</p>
      </div>
      <div className="flex w-full justify-between">
        <p className="text-lg font-semibold">Total</p>
        <p className="text-lg font-semibold">
          Rs.{price + Math.floor(price * (1 / 10)) + 100}
        </p>
      </div>
      <button className="w-full rounded-lg bg-theme-dark-gray p-3 uppercase text-white">
        Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
