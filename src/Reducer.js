export const initialState = {
	basket: [],
	user: [],
	products: [
		{
			id: 1554451,
			title: "The lean Startup",
			price: 29.99,
			image: "https://m.media-amazon.com/images/I/51T-sMqSMiL._AC_SY780_.jpg",
			rating: 4,
		},
		{
			id: 454545454,
			title:
				"Kenwood kMix Stand Mixer for Baking stylish Kitchen Mixer with K-bealter, Dough Hook and Whisk  ",
			price: 99.99,
			rating: 3,
			image:
				"https://www.seriouseats.com/thmb/hMevGtiDkCJ_k7FUZ9TNq3Ud4Wc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__12__20151201-gift-guide-stand-mixer-1500x1125-712fb32a38d84c8097d3f5ce60ca626b.jpg",
		},
		{
			id: 15151650,
			title:
				"Amazon Echo (3rd generation)| Smart Speaker with Alexa, Charcoal Farbric",
			price: 98.99,
			rating: 3,
			image:
				"https://media.wired.com/photos/5e20f2a09fdee10008c4ce6d/3:4/w_1350,h_1800,c_limit/Gear-Amazon-Echo-Studio-SOURCE-Amazon.jpg",
		},
		{
			id: 5555118,
			title:
				"New Apple iPad Pro (12.9-inch, Wifi, 128Gb) - Silver (4th Generation)",
			price: 589.99,
			rating: 4,
			image:
				"https://static-01.daraz.com.np/p/469772166b1973a1d1647595065d3913.png",
		},
		{
			id: 4522222,
			title:
				"Samsung LC23232323 49' Curved LEd Gaming Monitor - super Ultra Wide Dual WQHD 5120 x 1440",
			price: 1094.98,
			rating: 3,
			image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg",
		},
		{
			id: 32322661,
			title: "Samsung LC49GR3298 49' Curved Led Gaming Monitor",
			price: 199.99,
			rating: 5,
			image: "https://i.ytimg.com/vi/v9HgRH0AIJA/maxresdefault.jpg",
		},
	],
};

//Selector
export const getBasketTotal = (basket) =>
	basket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state,
				basket: [...state.basket, action.item],
			};

		case "REMOVE_FROM_BASKET":
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);

			let newBasket = [...state.basket];
			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Can't remove product (id: ${action.id} as its not in basket! )`
				);
			}
			return {
				...state,
				basket: newBasket,
			};
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		default:
			return state;
	}
};
export default reducer;
