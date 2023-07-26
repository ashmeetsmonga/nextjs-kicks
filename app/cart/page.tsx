import React from "react";
import Bag from "./components/Bag";
import OrderSummary from "./components/OrderSummary";

const Cart = () => {
	return (
		<div className='w-full flex flex-col md:flex-row gap-4'>
			<Bag />
			<OrderSummary />
		</div>
	);
};

export default Cart;
