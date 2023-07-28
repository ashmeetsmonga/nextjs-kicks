"use client";

import Image from "next/image";
import React, { useState } from "react";
import shoesList from '@/app/data.json'

interface ImageContainerProps {
  id: string
}

const ImageContainer: React.FC<ImageContainerProps> = ({id}) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const product = shoesList.find(shoe => shoe.id === id);

  return (
    <div className="w-full md:w-3/5">
      <div className="flex w-full flex-col gap-4 md:hidden">
        <div className="relative aspect-square w-full rounded-xl">
          <Image
            src={product?.imageURLs.split(',')[0] || '/images/shoe-1.png'}
            alt="shoe-1-img-1"
            fill
            objectFit="contain"
            className="rounded-xl"
          />
        </div>
        <div className="w-full grid grid-cols-4 gap-2">
          {product?.imageURLs.split(',').slice(0, 4).map((url, idx) => <div className="relative aspect-square w-full rounded-xl">
            <Image
              src={url}
              alt="shoe-1"
              fill
              objectFit="contain"
              className="rounded-xl"
            />
          </div>)}
        </div>
      </div>
      <div className="hidden grid-cols-2 gap-2 md:grid">
        <div className="relative aspect-square w-full rounded-xl">
          <Image
            src="/images/shoe-1.png"
            alt="shoe-1"
            fill
            objectFit="contain"
            className="rounded-xl"
          />
        </div>
        <div className="relative aspect-square w-full rounded-xl">
          <Image
            src="/images/shoe-1.png"
            alt="shoe-1"
            fill
            objectFit="contain"
            className="rounded-xl"
          />
        </div>
        <div className="relative aspect-square w-full rounded-xl">
          <Image
            src="/images/shoe-1.png"
            alt="shoe-1"
            fill
            objectFit="contain"
            className="rounded-xl"
          />
        </div>
        <div className="relative aspect-square w-full rounded-xl">
          <Image
            src="/images/shoe-1.png"
            alt="shoe-1"
            fill
            objectFit="contain"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
