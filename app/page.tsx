import Image from "next/image";
import { Suspense, useEffect } from "react";
import FeaturedProducts from "./components/FeaturedProducts";
import shoesList from './data.json'

export default async function Home() {

  // const shoesList = await getShoesList();

  return (
    <main className="flex flex-col gap-4 md:gap-6">
      <div className="w-full text-center text-7xl font-extrabold uppercase text-theme-dark-gray md:text-9xl">
        Do it <span className="text-theme-blue">right</span>
      </div>
      <div className="relative h-96 w-full rounded-xl bg-black md:h-[40rem] ">
        <Image
          src={"/images/hero.png"}
          className="vignette rounded-xl"
          alt="hero"
          fill
          objectFit="cover"
        />
        <div className="absolute bottom-0 left-0 w-3/5 p-4 text-white md:p-6">
          <h2 className="text-3xl font-semibold uppercase md:text-6xl">
            Nike air max
          </h2>
          <p className="md:text-xl">
            Nike introducing the new air max for everyone's comfort
          </p>
          <button className="mt-2 rounded-lg bg-theme-blue px-4 py-2">
            Shop now
          </button>
        </div>
      </div>
      <Suspense fallback={'Loading...'}>
      <FeaturedProducts shoesList={shoesList} /></Suspense>
    </main>
  );
}
