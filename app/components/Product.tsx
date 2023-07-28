"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface ProductProps {
  shoeDetails?: Shoe
}

const Product: React.FC<ProductProps> = ({shoeDetails}) => {
  const router = useRouter();

  const [shoeImageSrc, setShoeImageSrc] = useState<string>(shoeDetails?.imageURLs.split(',')[0] || "/images/shoe-1.png")

  return (
    <div
      onClick={() => router.push(`/product/${shoeDetails?.id}`)}
      className="group flex w-full cursor-pointer flex-col items-center gap-2"
    >
      <div className="relative aspect-square w-full rounded-xl bg-white">
        <Image
          src={shoeImageSrc}
          alt="shoes"
          fill
          objectFit="cover"
          onError={() => setShoeImageSrc('/images/shoe-1.png')}
          className="rounded-xl transition-transform group-hover:scale-105"
        />
      </div>
      <div className="font-semibold capitalize md:text-2xl">
        {shoeDetails?.name}
      </div>
      <button className="md:text-md w-full rounded-lg bg-theme-dark-gray py-3 text-sm uppercase text-white">
        View product - <span className="text-theme-yellow">{shoeDetails?.pricesMax}</span>
      </button>
    </div>
  );
};

export default Product;
