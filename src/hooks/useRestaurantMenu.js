import { useState, useEffect } from "react";

import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
	const [restaurantInfo, setRestaurantInfo] = useState(null);

	useEffect(() => {
		fetchMenu();
		// eslint-disable-next-line
	}, []);

	const fetchMenu = async () => {
		const data = await fetch(MENU_API + resId);

		const json = await data.json();

		setRestaurantInfo(json.data);
	};

	return restaurantInfo;
};

export default useRestaurantMenu;
