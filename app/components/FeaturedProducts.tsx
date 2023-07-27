"use client"

import { useRouter } from 'next/navigation'
import React from 'react'
import Product from './Product'

interface FeaturedProductsProps {
    shoesList?: Shoe[]
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({shoesList}) => {

    const router = useRouter()

  return (
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
      {shoesList?.slice(0, 4).map(shoe => <Product key={shoe.id} shoeDetails={shoe} />)}
    </div>
  </div>
  )
}

export default FeaturedProducts