import Image from "next/image";

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col gap-4 md:gap-6'>
			<div className='uppercase w-full text-center font-extrabold text-7xl md:text-9xl text-theme-dark-gray'>
				Do it <span className='text-theme-blue'>right</span>
			</div>
			<div className='w-full h-96 md:h-[40rem] rounded-xl relative'>
				<Image
					src={"/images/hero.png"}
					className='rounded-xl'
					alt='hero'
					layout='fill'
					objectFit='cover'
				/>
			</div>
		</main>
	);
}
