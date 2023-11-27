import { useState, useEffect } from "react";

import { HOMEPAGE_URL, CDN_URL } from "../utils/constants";

const OfferBanner = () => {
	const [listOfOffers, setListOfOffers] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(HOMEPAGE_URL);

		const json = await data.json();

		// Optional Chaining
		setListOfOffers(
			json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
		);
	};

	if (!listOfOffers) return null;

	return (
		<main className="mt-28 mx-36 relative">
			<p className="ml-3 font-bold font-body text-2xl">Best Offers for you</p>
			<section className="flex overflow-x-scroll no-scrollbar">
				{listOfOffers.map((offer) => (
					<img
						key={offer?.id}
						alt="offer banner"
						src={CDN_URL + offer?.imageId}
						className="h-64 w-[26rem] my-4 mx-2 hover:scale-95 hover:transition hover:duration-200 hover:ease-in-out"
					/>
				))}
			</section>
		</main>
	);
};

export default OfferBanner;
