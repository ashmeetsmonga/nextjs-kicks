"use client";

import Image from "next/image";
import React, { useState } from "react";

const ImageContainer = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="w-full md:w-3/5">
      <div className="flex w-full flex-col gap-4 md:hidden">
        <div className="relative aspect-square w-full rounded-xl">
          <Image
            src="/images/shoe-1.png"
            alt="shoe-1"
            fill
            objectFit="contain"
            className="rounded-xl"
          />
        </div>
        <div className="flex w-full gap-2">
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
