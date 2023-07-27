"use client"

import DiscountHeader from "@/app/components/DiscountHeader";
import Product from "@/app/components/Product";
import { useShoeStore } from "@/app/store/useShoeStore";
import Image from "next/image";
import React from "react";

const CategoryPage = () => {

  const shoesList = useShoeStore(state => state.shoesList)

  return (
    <div className="flex w-full flex-col gap-4">
      <DiscountHeader />
      <div className="flex w-full justify-between gap-8 md:hidden">
        <select className="w-1/2 rounded-lg p-2">
          <option>Filter</option>
        </select>
        <select className="w-1/2 rounded-lg p-2">
          <option>Trending</option>
        </select>
      </div>
      <div>
        <h2 className="text-2xl font-semibold capitalize md:text-4xl">
          Life style shoes
        </h2>
        <p className="text-xs">10 items</p>
      </div>
      <div className="flex w-full gap-4">
        <div className="hidden w-1/4 flex-col md:flex">
          <p className="text-xl font-semibold">Filters</p>
        </div>
        <div className="grid w-full grid-cols-2 gap-x-4 gap-y-8 md:w-3/4 md:grid-cols-3">
        {shoesList.map(shoe => <Product key={shoe.id} shoeDetails={shoe} />)}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
