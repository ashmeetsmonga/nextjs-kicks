"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Product = () => {
	const router = useRouter();
	return (
		<div
			onClick={() => router.push("/product/1")}
			className='w-full flex flex-col items-center gap-2 group cursor-pointer'
		>
			<div className='w-full aspect-square relative bg-white rounded-xl'>
				<Image
					src='/images/shoe-1.png'
					alt='shoes'
					fill
					objectFit='cover'
					className='rounded-xl transition-transform group-hover:scale-105'
				/>
			</div>
			<div className='capitalize font-semibold md:text-2xl'>Adidas parley running shoes</div>
			<button className='bg-theme-dark-gray uppercase text-sm py-3 rounded-lg text-white w-full md:text-md'>
				View product - <span className='text-theme-yellow'>Rs.3000</span>
			</button>
		</div>
	);
};

export default Product;
