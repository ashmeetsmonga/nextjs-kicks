import DiscountHeader from "@/app/components/DiscountHeader";
import Product from "@/app/components/Product";
import Image from "next/image";
import React from "react";

const CategoryPage = () => {
	return (
		<div className='w-full flex flex-col gap-4'>
			<DiscountHeader />
			<div className='md:hidden w-full flex justify-between gap-8'>
				<select className='w-1/2 p-2 rounded-lg'>
					<option>Filter</option>
				</select>
				<select className='w-1/2 p-2 rounded-lg'>
					<option>Trending</option>
				</select>
			</div>
			<div>
				<h2 className='text-2xl md:text-4xl font-semibold capitalize'>Life style shoes</h2>
				<p className='text-xs'>10 items</p>
			</div>
			<div className='w-full flex gap-4'>
				<div className='hidden md:flex flex-col w-1/4'>
					<p className='text-xl font-semibold'>Filters</p>
				</div>
				<div className='w-full md:w-3/4 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8'>
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
				</div>
			</div>
		</div>
	);
};

export default CategoryPage;
