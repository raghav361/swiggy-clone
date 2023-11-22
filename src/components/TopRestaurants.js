import { useState, useEffect } from "react";

import RestaurantCard from "./RestaurantCard";
import { HOMEPAGE_URL } from "../utils/constants";

const TopRestaurants = () => {
	const [listOfTopRestaurants, setListOfTopRestaurants] = useState([]);

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line
	}, []);

	const fetchData = async () => {
		const data = await fetch(HOMEPAGE_URL);

		const json = await data.json();

		// Optional Chaining
		setListOfTopRestaurants(
			json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};

	if (!listOfTopRestaurants) return null;

	return (
		<main className="my-16 mx-36">
			<p className="font-bold font-body text-2xl ml-3 mb-5">
				Top restaurant chains in Bangalore
			</p>
			<section className="flex overflow-x-scroll scrollbar">
				{listOfTopRestaurants.map((restaurant) => (
					<RestaurantCard
						key={restaurant?.info?.id}
						resData={restaurant?.info}
					/>
				))}
			</section>
		</main>
	);
};

export default TopRestaurants;
