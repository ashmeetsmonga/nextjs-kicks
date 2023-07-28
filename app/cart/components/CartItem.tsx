"use client";

import Image from "next/image";
import React from "react";
import shoesList from "@/app/data.json";
import { AiFillDelete } from "react-icons/ai";
import { useShoeStore } from "@/app/store/useShoeStore";

interface CartItemProps {
  item: CartItem;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const product = shoesList.filter((shoe) => shoe.id === item.productId)[0];

  const removeFromCart = useShoeStore((state) => state.removeFromCart);

  return (
    <div className="flex gap-2 md:gap-4">
      <div className="relative aspect-square w-1/3 rounded-xl md:w-1/5">
        <Image
          src={product.imageURLs.split(",")[0] || "/images/shoe-1.png"}
          alt="shoe"
          fill
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="flex w-2/3 flex-col gap-2 md:w-4/5 md:flex-row md:justify-between">
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold md:text-2xl">{product.name}</h2>
          <div className="mt-4 flex w-full justify-between">
            <p>Size {item.size}</p>
            <p>Quantity {item.quantity}</p>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="text-xl font-semibold text-theme-blue">
            Rs. {product.pricesMax}
          </div>
          <AiFillDelete
            onClick={() => removeFromCart(item.productId)}
            size={25}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
