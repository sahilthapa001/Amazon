import React, { useContext } from "react";
import "./Home.css";
import Product from "./Product";
import { ProductContext } from "./Context/Product";
import { Link } from "react-router-dom";

function Home() {
	const { filteredProducts } = useContext(ProductContext);

	return (
		<div className="home">
			<div className="home__container">
				<img
					src="https://www.swardestoncc.co.uk/wp-content/uploads/2020/05/amazon-smile.jpeg"
					className="home__image"
					alt="Amazon Smile"
				/>
				<div className="home__row">
					{filteredProducts.map((pd, index) => (
						<Link to={`/product/${pd.id}`} key={index}>
							{/* Use backticks (`) to interpolate the product ID */}
							<Product
								id={pd.id}
								title={pd.name}
								price={pd.price}
								image={pd.image}
								rating={pd.rating}
							/>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default Home;
