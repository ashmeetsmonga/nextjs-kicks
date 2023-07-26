import Image from "next/image";
import React from "react";

const DiscountHeader = () => {
  return (
    <div className="relative h-60 w-full rounded-xl px-5 md:h-72">
      <Image
        src="/images/discount-image.png"
        alt="discount-image"
        fill
        objectFit="cover"
        className="rounded-xl"
      />
      <div className="absolute flex h-60 w-1/2 flex-col justify-center gap-2 text-white md:h-72">
        <div className="md:text-xl">Limited time only</div>
        <div className="text-4xl font-semibold md:text-6xl">Get 30% Off</div>
        <div className="text-xs font-thin md:text-lg">
          Sneakers made with your comfort in mind so you can put all of your
          focus into your next session.
        </div>
      </div>
    </div>
  );
};

export default DiscountHeader;
