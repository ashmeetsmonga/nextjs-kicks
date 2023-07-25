"use client";

import Image from "next/image";
import React, { useState } from "react";

const ImageContainer = () => {
	const [selectedImage, setSelectedImage] = useState(0);

	return (
		<div className='w-full'>
			<div className='md:hidden w-full flex flex-col gap-4'>
				<div className='w-full aspect-square relative rounded-xl'>
					<Image
						src='/images/shoe-1.png'
						alt='shoe-1'
						fill
						objectFit='contain'
						className='rounded-xl'
					/>
				</div>
				<div className='w-full flex gap-2'>
					<div className='w-full aspect-square relative rounded-xl'>
						<Image
							src='/images/shoe-1.png'
							alt='shoe-1'
							fill
							objectFit='contain'
							className='rounded-xl'
						/>
					</div>
					<div className='w-full aspect-square relative rounded-xl'>
						<Image
							src='/images/shoe-1.png'
							alt='shoe-1'
							fill
							objectFit='contain'
							className='rounded-xl'
						/>
					</div>
					<div className='w-full aspect-square relative rounded-xl'>
						<Image
							src='/images/shoe-1.png'
							alt='shoe-1'
							fill
							objectFit='contain'
							className='rounded-xl'
						/>
					</div>
					<div className='w-full aspect-square relative rounded-xl'>
						<Image
							src='/images/shoe-1.png'
							alt='shoe-1'
							fill
							objectFit='contain'
							className='rounded-xl'
						/>
					</div>
				</div>
			</div>
			<div className='hidden md:grid grid-cols-2 gap-2 w-3/5'>
				<div className='w-full aspect-square relative rounded-xl'>
					<Image
						src='/images/shoe-1.png'
						alt='shoe-1'
						fill
						objectFit='contain'
						className='rounded-xl'
					/>
				</div>
				<div className='w-full aspect-square relative rounded-xl'>
					<Image
						src='/images/shoe-1.png'
						alt='shoe-1'
						fill
						objectFit='contain'
						className='rounded-xl'
					/>
				</div>
				<div className='w-full aspect-square relative rounded-xl'>
					<Image
						src='/images/shoe-1.png'
						alt='shoe-1'
						fill
						objectFit='contain'
						className='rounded-xl'
					/>
				</div>
				<div className='w-full aspect-square relative rounded-xl'>
					<Image
						src='/images/shoe-1.png'
						alt='shoe-1'
						fill
						objectFit='contain'
						className='rounded-xl'
					/>
				</div>
			</div>
		</div>
	);
};

export default ImageContainer;
