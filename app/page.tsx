import Image from "next/image";

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col'>
			<div className='uppercase w-full text-center font-extrabold text-7xl md:text-9xl text-theme-dark-gray'>
				Do it <span className='text-theme-blue'>right</span>
			</div>
		</main>
	);
}
