import Image from "next/image";
import React from "react";

const Bag = () => {
	return (
		<div className='w-full md:w-3/5 flex flex-col gap-3 p-4 rounded-xl bg-white'>
			<h2 className='text-2xl md:text-4xl font-semibold'>Your Bag</h2>
			<p>Items in your bag are not reserved. Checkout now to make them yours</p>
			<div className='flex gap-2 md:gap-4'>
				<div className='relative w-1/3 aspect-square md:w-1/5 rounded-xl'>
					<Image
						src='/images/shoe-1.png'
						alt='shoe'
						fill
						objectFit='cover'
						className='rounded-xl'
					/>
				</div>
				<div className='w-2/3 md:w-4/5 flex flex-col md:flex-row md:justify-between gap-2'>
					<div className='w-full md:w-1/2'>
						<h2 className='text-xl md:text-2xl font-semibold'>Dropset Trainer Shoes</h2>
						<div className='flex flex-col gap-1'>
							<p>Mens Road Running Shoes</p>
							<p>Enamel Blue/ University White</p>
						</div>
						<div className='w-full flex justify-between'>
							<p>Size 10</p>
							<p>Quantity 1</p>
						</div>
					</div>
					<div className='text-theme-blue font-semibold text-xl'>Rs. 3000</div>
				</div>
			</div>
		</div>
	);
};

export default Bag;
