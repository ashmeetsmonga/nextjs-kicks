import Image from "next/image";

export default function Home() {
	return (
		<main className='flex flex-col gap-4 md:gap-6'>
			<div className='uppercase w-full text-center font-extrabold text-7xl md:text-9xl text-theme-dark-gray'>
				Do it <span className='text-theme-blue'>right</span>
			</div>
			<div className='w-full h-96 md:h-[40rem] rounded-xl relative bg-black '>
				<Image
					src={"/images/hero.png"}
					className='rounded-xl vignette'
					alt='hero'
					layout='fill'
					objectFit='cover'
				/>
				<div className='absolute bottom-0 left-0 text-white p-4 md:p-6 w-3/5'>
					<h2 className='text-3xl md:text-6xl uppercase font-semibold'>Nike air max</h2>
					<p className='md:text-xl'>Nike introducing the new air max for everyone's comfort</p>
					<button className='px-4 py-2 mt-2 bg-theme-blue rounded-lg'>Shop now</button>
				</div>
			</div>
			<div className=''>
				<div className='flex justify-between items-center'>
					<h2 className='font-semibold text-2xl md:text-4xl'>Don't miss out new drops</h2>
					<button className='px-4 py-2 mt-2 bg-theme-blue rounded-lg text-white'>Shop now</button>
				</div>
				<div></div>
			</div>
		</main>
	);
}
