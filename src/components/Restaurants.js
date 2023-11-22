import { useState, useEffect } from "react";

import RestaurantCard from "./RestaurantCard";
import { HOMEPAGE_URL } from "../utils/constants";

const Restaurants = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState([]);

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line
	}, []);

	const fetchData = async () => {
		const data = await fetch(HOMEPAGE_URL);

		const json = await data.json();

		// Optional Chaining
		setListOfRestaurants(
			json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};

	if (!listOfRestaurants) return null;

	return (
		<main className="my-16 mx-36">
			<p className="font-bold font-body text-2xl ml-3 mb-5">
				Restaurants with online food delivery in Bangalore
			</p>
			<section className="flex flex-wrap ">
				{listOfRestaurants.map((restaurant) => (
					<RestaurantCard
						key={restaurant?.info?.id}
						resData={restaurant?.info}
					/>
				))}
			</section>
		</main>
	);
};

export default Restaurants;
