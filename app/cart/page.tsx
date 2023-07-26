import React from "react";
import Bag from "./components/Bag";
import OrderSummary from "./components/OrderSummary";

const Cart = () => {
  return (
    <div className="flex w-full flex-col gap-4 md:flex-row">
      <Bag />
      <OrderSummary />
    </div>
  );
};

export default Cart;
