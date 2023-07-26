import React from "react";
import ImageContainer from "./components/ImageContainer";
import ProductInfo from "./components/ProductInfo";

const ProductDetails = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full flex-col gap-4 md:flex-row md:px-24">
        <ImageContainer />
        <ProductInfo />
      </div>
    </div>
  );
};

export default ProductDetails;
