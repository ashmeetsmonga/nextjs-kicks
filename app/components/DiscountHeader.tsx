import Image from "next/image";
import React from "react";

const DiscountHeader = () => {
	return (
		<div className='w-full relative h-60 md:h-72 rounded-xl px-5'>
			<Image
				src='/images/discount-image.png'
				alt='discount-image'
				fill
				objectFit='cover'
				className='rounded-xl'
			/>
			<div className='absolute h-60 md:h-72 text-white w-1/2 flex flex-col justify-center gap-2'>
				<div className='md:text-xl'>Limited time only</div>
				<div className='text-4xl md:text-6xl font-semibold'>Get 30% Off</div>
				<div className='text-xs md:text-lg font-thin'>
					Sneakers made with your comfort in mind so you can put all of your focus into your next
					session.
				</div>
			</div>
		</div>
	);
};

export default DiscountHeader;
