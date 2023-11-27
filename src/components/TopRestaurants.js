import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
			<section className="flex overflow-x-scroll no-scrollbar">
				{listOfTopRestaurants.map((restaurant) => (
					<Link
						to={
							"/restaurants/" +
							restaurant?.info.name.replace(/\s/g, "") +
							"/" +
							restaurant?.info.id
						}
						key={restaurant?.info?.id}
					>
						<RestaurantCard resData={restaurant?.info} />
					</Link>
				))}
			</section>
		</main>
	);
};

export default TopRestaurants;
