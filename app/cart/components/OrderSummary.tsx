import React from "react";

const OrderSummary = () => {
  return (
    <div className="flex w-full flex-col gap-3 rounded-xl bg-white p-4 md:w-2/5 md:bg-transparent">
      <h1 className="text-2xl font-semibold md:text-4xl">Order Summary</h1>
      <div className="flex w-full justify-between">
        <p>1 Item</p>
        <p>3000</p>
      </div>
      <div className="flex w-full justify-between">
        <p>Delivery</p>
        <p>100</p>
      </div>
      <div className="flex w-full justify-between">
        <p>Tax</p>
        <p>300</p>
      </div>
      <div className="flex w-full justify-between">
        <p className="text-lg font-semibold">Total</p>
        <p className="text-lg font-semibold">Rs.3500</p>
      </div>
      <button className="w-full rounded-lg bg-theme-dark-gray p-3 uppercase text-white">
        Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
