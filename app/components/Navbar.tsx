"use client";

import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { BiSolidUser } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className='w-full mb-6'>
			<div className='bg-white w-full flex justify-between items-center p-4 md:px-6 rounded-xl'>
				<button className='md:hidden w-1/3'>
					{!showMenu && (
						<LuMenu onClick={() => setShowMenu(true)} size={25} className='cursor-pointer' />
					)}
					{showMenu && (
						<>
							<AiFillCloseCircle
								size={25}
								className='cursor-pointer'
								onClick={() => setShowMenu(false)}
							/>
							<NavbarMenu />
						</>
					)}
				</button>
				<div className='hidden md:flex gap-6 w-1/3'>
					<div className='cursor-pointer'>Life Style Shoes</div>
					<div className='cursor-pointer'>Basketball Shoes</div>
				</div>
				<div className='font-extrabold text-3xl w-1/3 text-center'>
					{/* KI<span className='text-stroke-3 relative z-10'>C</span>
					<span className='-ml-1'>KS</span> */}
					KICKS
				</div>
				<div className='flex gap-2 md:gap-6 items-center w-1/3 justify-end'>
					<BiSolidUser size={25} />
					<BsFillCartFill size={22} className='text-theme-yellow' />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
