import React, { useContext } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useState } from "react";
import { ProductContext, ProductData } from "./Context/Product";

function Header() {
	const [{ basket, user }, dispatch] = useStateValue(); // Access the products state
	const { products, filteredProducts, setFilteredProducts, setProducts } =
		useContext(ProductContext);
	const [searchQuery, setSearchQuery] = useState("");

	const handleAuthentication = () => {
		if (user) {
			signOut(auth);
		}
	};

	const handleSearch = (e) => {
		const query = e.target.value;

		setSearchQuery(query);

		// Filter the products based on the search query
		const filteredResults = products.filter((product) =>
			product.name.toLowerCase().includes(query.toLowerCase())
		);
		setFilteredProducts(filteredResults);
	};

	return (
		<div className="header">
			<Link to="/ ">
				<img
					className="header__logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt=""
				/>
			</Link>
			<div className="header__search">
				<input
					type="text"
					className="header__searchInput"
					placeholder="Search for products..."
					value={searchQuery}
					onChange={handleSearch}
				/>
				{/* {searchQuery && (
					<div className="header__searchResults">
						{searchResults.map((result) => (
							<Link to={`/product/${result.id}`} key={result.id}>
								<div className="header__searchResultItem">
									<p>{result.title}</p>
								</div>
							</Link>
						))} */}
				{/* </div> */}
				{/* )} */}
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__nav">
				<Link to={!user && "/Login"}>
					<div onClick={handleAuthentication} className="header__option">
						<span className="header__optionLineOne">
							Hello {!user ? "Guest" : user.email}
						</span>
						<span className="header__optionLineTwo">
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>
				<div className="header__option">
					<span className="header__optionLineOne">Returns</span>
					<span className="header__optionLineTwo">Orders</span>
				</div>
				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>
				<Link to="/checkout">
					<div className="header__optionBasket">
						<AddShoppingCartIcon />
						<span className="header__optionLineTwo header__basketCount">
							{basket.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
