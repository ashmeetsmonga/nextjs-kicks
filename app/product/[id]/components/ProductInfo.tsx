"use client";

import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import shoesList from "@/app/data.json";
import { useShoeStore } from "@/app/store/useShoeStore";
import { toast } from "react-hot-toast";

interface ProductInfoProps {
  id: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ id }) => {
  const product = shoesList.find((shoe) => shoe.id === id);

  const [size, setSize] = useState<number | null>(null);

  const addToCart = useShoeStore((state) => state.addToCart);

  const handleAddToCart = () => {
    if (size === null) return toast.error("Please select size");
    const cartItem: CartItem = { productId: id, quantity: 1, size };
    addToCart(cartItem);
    toast.success("Product added to cart");
  };

  return (
    <div className="flex w-full flex-col gap-2 md:w-2/5 md:gap-4">
      <div
        onClick={() => alert(id)}
        className="self-start rounded-lg bg-theme-blue p-2 text-white md:p-4"
      >
        New Release
      </div>
      <h1 className="text-2xl font-semibold uppercase md:text-4xl">
        {product?.name}
      </h1>
      <p className="text-xl font-semibold text-theme-blue md:text-2xl">
        {`Rs. ${product?.pricesMax}`}
      </p>
      {/* Color Selection */}
      {/*<div className="flex flex-col gap-2">
        <div className="text-xl font-semibold md:text-2xl">Colors</div>
         <div className="flex gap-4">
          <div className="rounded-full bg-theme-blue p-4"></div>
          <div className="rounded-full bg-theme-dark-gray p-4"></div>
        </div> 
      </div>*/}
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold md:text-2xl">Size</div>
        <div className="flex gap-2">
          {new Array(5).fill(0).map((val, idx) =>
            size === idx + 5 ? (
              <div
                onClick={() => setSize(idx + 5)}
                className="cursor-pointer rounded-lg bg-theme-blue px-5 py-3 font-semibold text-white"
              >
                {idx + 5}
              </div>
            ) : (
              <div
                onClick={() => setSize(idx + 5)}
                className="cursor-pointer rounded-lg bg-white px-5 py-3 font-semibold"
              >
                {idx + 5}
              </div>
            ),
          )}
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-1 md:mt-0">
        <div className="flex w-full gap-1">
          <button
            onClick={() => handleAddToCart()}
            className="w-full rounded-xl bg-theme-dark-gray p-3 text-lg uppercase text-white"
          >
            Add to cart
          </button>
          <button className="rounded-xl bg-theme-dark-gray p-3">
            {" "}
            <AiOutlineHeart className="text-white" size={25} />{" "}
          </button>
        </div>
        <button className="w-full rounded-xl bg-theme-blue p-3 text-lg uppercase text-white">
          Buy It Now
        </button>
      </div>
      <div className="mt-2 flex flex-col gap-2 md:mt-0">
        <p className="text-lg font-semibold uppercase">About the product</p>
        {product &&
          product.descriptions &&
          JSON.parse(product.descriptions).map(
            (desc: Description, idx: number) => (
              <div className="flex w-full flex-col gap-4">
                {desc.value.split(".").map((sentence, idx) => (
                  <p>{sentence}</p>
                ))}
              </div>
            ),
          )}
      </div>
    </div>
  );
};

export default ProductInfo;
