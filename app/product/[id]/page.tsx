import React from "react";
import ImageContainer from "./components/ImageContainer";
import ProductInfo from "./components/ProductInfo";

const ProductDetails = () => {
	return (
		<div className='w-full flex flex-col gap-4'>
			<div className='w-full flex flex-col md:flex-row gap-4 md:px-24'>
				<ImageContainer />
				<ProductInfo />
			</div>
		</div>
	);
};

export default ProductDetails;
