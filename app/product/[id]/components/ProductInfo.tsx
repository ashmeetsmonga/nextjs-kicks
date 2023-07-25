import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const ProductInfo = () => {
	return (
		<div className='w-full md:w-2/5 flex flex-col gap-2 md:gap-4'>
			<div className='p-2 md:p-4 bg-theme-blue rounded-lg text-white self-start'>New Release</div>
			<h1 className='text-2xl md:text-4xl font-semibold uppercase'>Adidas parley running shoes</h1>
			<p className='text-xl md:text-2xl text-theme-blue font-semibold'>Rs. 3000</p>
			<div className='flex flex-col gap-2'>
				<div className='text-xl md:text-2xl font-semibold'>Colors</div>
				<div className='flex gap-4'>
					<div className='p-4 rounded-full bg-theme-blue'></div>
					<div className='p-4 rounded-full bg-theme-dark-gray'></div>
				</div>
			</div>
			<div className='flex flex-col gap-2'>
				<div className='text-xl md:text-2xl font-semibold'>Size</div>
				<div className='flex gap-2'>
					<div className='px-5 py-3 rounded-lg bg-white font-semibold'>5</div>
					<div className='px-5 py-3 rounded-lg bg-white font-semibold'>6</div>
					<div className='px-5 py-3 rounded-lg bg-white font-semibold'>7</div>
					<div className='px-5 py-3 rounded-lg bg-white font-semibold'>8</div>
					<div className='px-5 py-3 rounded-lg bg-white font-semibold'>9</div>
				</div>
			</div>
			<div className='flex flex-col gap-1 mt-2 md:mt-0'>
				<div className='w-full flex gap-1'>
					<button className='w-full p-3 bg-theme-dark-gray text-white uppercase text-lg rounded-xl'>
						Add to cart
					</button>
					<button className='p-3 bg-theme-dark-gray rounded-xl'>
						{" "}
						<AiOutlineHeart className='text-white' size={25} />{" "}
					</button>
				</div>
				<button className='w-full p-3 bg-theme-blue text-white uppercase text-lg rounded-xl'>
					Buy It Now
				</button>
			</div>
			<div className='flex flex-col gap-2 mt-2 md:mt-0'>
				<p className='text-lg uppercase font-semibold'>About the product</p>
				<div className='flex flex-col gap-4'>
					<p>Shadow Navy / Army Green</p>
					<p>This product is excluded from all promotional discounts and offers.</p>
					<p>Pay over time in interest-free installments with Affirm, Klarna or Afterpay.</p>
					<p>Join adiClub to get unlimited free standard shipping, returns, & exchanges.</p>
				</div>
			</div>
		</div>
	);
};

export default ProductInfo;
