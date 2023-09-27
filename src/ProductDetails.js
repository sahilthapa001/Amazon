// ProductDetails.js

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "./Context/Product";
import "./ProductDetails.css"; // Import the CSS file

function ProductDetails() {
	const { productId } = useParams();
	const { isLoading, products } = useContext(ProductContext);
	const [myProduct, setMyProduct] = useState(null);

	useEffect(() => {
		if (products.length > 0) {
			let cc = products.find((pd) => pd.id === productId);
			if (cc) {
				setMyProduct(cc);
			}
		}
	}, [productId, products, products.length]);

	if (isLoading || !myProduct) {
		return <div className="loading">Loading...</div>;
	}

	return (
		<div className="product-details">
			<h1 className="product-name">{myProduct?.name}</h1>
			<p className="product-price">Price: ${myProduct?.price}</p>
			<div className="product-image-container">
				<img
					className="product-image"
					src={myProduct?.image}
					alt={myProduct.name}
				/>
			</div>
			{/* Add more product details here */}
		</div>
	);
}
export default ProductDetails;
