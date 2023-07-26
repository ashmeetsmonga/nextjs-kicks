import Image from "next/image";
import React from "react";

const Bag = () => {
  return (
    <div className="flex w-full flex-col gap-3 rounded-xl bg-white p-4 md:w-3/5">
      <h2 className="text-2xl font-semibold md:text-4xl">Your Bag</h2>
      <p>Items in your bag are not reserved. Checkout now to make them yours</p>
      <div className="flex gap-2 md:gap-4">
        <div className="relative aspect-square w-1/3 rounded-xl md:w-1/5">
          <Image
            src="/images/shoe-1.png"
            alt="shoe"
            fill
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div className="flex w-2/3 flex-col gap-2 md:w-4/5 md:flex-row md:justify-between">
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-semibold md:text-2xl">
              Dropset Trainer Shoes
            </h2>
            <div className="flex flex-col gap-1">
              <p>Mens Road Running Shoes</p>
              <p>Enamel Blue/ University White</p>
            </div>
            <div className="flex w-full justify-between">
              <p>Size 10</p>
              <p>Quantity 1</p>
            </div>
          </div>
          <div className="text-xl font-semibold text-theme-blue">Rs. 3000</div>
        </div>
      </div>
    </div>
  );
};

export default Bag;
