import React from "react";

const OrderSummary = () => {
	return (
		<div className='w-full md:w-2/5 flex flex-col gap-3 p-4 bg-white rounded-xl md:bg-transparent'>
			<h1 className='text-2xl md:text-4xl font-semibold'>Order Summary</h1>
			<div className='w-full flex justify-between'>
				<p>1 Item</p>
				<p>3000</p>
			</div>
			<div className='w-full flex justify-between'>
				<p>Delivery</p>
				<p>100</p>
			</div>
			<div className='w-full flex justify-between'>
				<p>Tax</p>
				<p>300</p>
			</div>
			<div className='w-full flex justify-between'>
				<p className='font-semibold text-lg'>Total</p>
				<p className='font-semibold text-lg'>Rs.3500</p>
			</div>
			<button className='w-full rounded-lg p-3 bg-theme-dark-gray text-white uppercase'>
				Checkout
			</button>
		</div>
	);
};

export default OrderSummary;
