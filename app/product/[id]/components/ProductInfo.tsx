import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const ProductInfo = () => {
  return (
    <div className="flex w-full flex-col gap-2 md:w-2/5 md:gap-4">
      <div className="self-start rounded-lg bg-theme-blue p-2 text-white md:p-4">
        New Release
      </div>
      <h1 className="text-2xl font-semibold uppercase md:text-4xl">
        Adidas parley running shoes
      </h1>
      <p className="text-xl font-semibold text-theme-blue md:text-2xl">
        Rs. 3000
      </p>
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold md:text-2xl">Colors</div>
        <div className="flex gap-4">
          <div className="rounded-full bg-theme-blue p-4"></div>
          <div className="rounded-full bg-theme-dark-gray p-4"></div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold md:text-2xl">Size</div>
        <div className="flex gap-2">
          <div className="rounded-lg bg-white px-5 py-3 font-semibold">5</div>
          <div className="rounded-lg bg-white px-5 py-3 font-semibold">6</div>
          <div className="rounded-lg bg-white px-5 py-3 font-semibold">7</div>
          <div className="rounded-lg bg-white px-5 py-3 font-semibold">8</div>
          <div className="rounded-lg bg-white px-5 py-3 font-semibold">9</div>
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-1 md:mt-0">
        <div className="flex w-full gap-1">
          <button className="w-full rounded-xl bg-theme-dark-gray p-3 text-lg uppercase text-white">
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
        <div className="flex flex-col gap-4">
          <p>Shadow Navy / Army Green</p>
          <p>
            This product is excluded from all promotional discounts and offers.
          </p>
          <p>
            Pay over time in interest-free installments with Affirm, Klarna or
            Afterpay.
          </p>
          <p>
            Join adiClub to get unlimited free standard shipping, returns, &
            exchanges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
