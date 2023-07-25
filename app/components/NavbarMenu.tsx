import Link from "next/link";
import React from "react";

const NavbarMenu = () => {
	return (
		<div className='absolute top-28 left-10 z-10 flex flex-col gap-4 p-4 bg-white rounded-lg items-start'>
			<Link href='/menu/life-style-shoes'>Life Style Shoes</Link>
			<Link href='/menu/basketball-shoes'>Basketball Shoes</Link>
		</div>
	);
};

export default NavbarMenu;
