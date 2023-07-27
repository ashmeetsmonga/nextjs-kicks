"use client"

import Image from "next/image";
import Product from "./components/Product";
import { useShoeStore } from "./store/useShoeStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const setShoesList = useShoeStore(state => state.setShoesList)
  const shoesList = useShoeStore(state => state.shoesList)

  const router = useRouter()

  useEffect(() => {
    fetch('/shoes-data.json').then(data => data.json()).then(data => setShoesList(data));
  }, [])

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
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold md:text-4xl">
            Don't miss out new drops
          </h2>
          <button onClick={() => router.push('/menu/life-style')} className="mt-2 rounded-lg bg-theme-blue px-4 py-2 text-white">
            Shop now
          </button>
        </div>
        <div className="max-w-screen grid grid-cols-2 gap-4 md:grid-cols-4">
          {shoesList.slice(0, 4).map(shoe => <Product key={shoe.id} shoeDetails={shoe} />)}
        </div>
      </div>
    </main>
  );
}
