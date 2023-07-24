import React from "react";
import { LuMenu } from "react-icons/lu";
import { BiSolidUser } from "react-icons/bi";

const Navbar = () => {
	return (
		<div className='w-full p-6'>
			<div className='bg-white w-full flex justify-between items-center p-4 md:px-6 rounded-xl'>
				<div className='md:hidden w-1/3'>
					<LuMenu size={25} />
				</div>
				<div className='hidden md:flex gap-6 w-1/3'>
					<div>New Drops</div>
					<div>Men</div>
					<div>Women</div>
				</div>
				<div className='font-extrabold text-3xl w-1/3 text-center'>
					{/* KI<span className='text-stroke-3 relative z-10'>C</span>
					<span className='-ml-1'>KS</span> */}
					KICKS
				</div>
				<div className='flex gap-2 md:gap-6 items-center w-1/3 justify-end'>
					<BiSolidUser size={25} />
					<div className='bg-theme-yellow px-2 py-0.5 flex justify-center items-center rounded-full'>
						0
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
