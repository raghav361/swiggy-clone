import { useState } from "react";
import { useParams } from "react-router-dom";
import {
	FaExclamationCircle,
	FaStar,
	FaClock,
	FaRupeeSign,
	FaLocationArrow,
	FaIdCard,
} from "react-icons/fa";

import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
	const { restaurantID } = useParams();

	const restaurantInfo = useRestaurantMenu(restaurantID);

	const [showIndex, setShowIndex] = useState(0);

	if (!restaurantInfo) return null;

	const {
		name,
		cuisines,
		areaName,
		costForTwoMessage,
		feeDetails,
		avgRatingString,
		totalRatingsString,
		sla,
	} = restaurantInfo?.cards[0]?.card?.card?.info;

	const { lastMileTravelString, slaString } = sla;

	const { message } = feeDetails;

	const offers =
		restaurantInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;

	const categories =
		restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(cat) =>
				cat.card?.card?.["@type"] ===
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		);

	const restauarantLicenseInfo =
		restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(info) =>
				info.card?.card?.["@type"] ===
				"type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo"
		);

	const restauarantAddress =
		restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(info) =>
				info.card?.card?.["@type"] ===
				"type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress"
		);

	return (
		<main className="mt-40 mx-80 font-body">
			<section className="grid grid-cols-2 gap-10 pb-5 border-dashed border-b border-gray-400">
				<section>
					<p className="font-extrabold text-xl mb-2">{name}</p>
					<p className="text-sm text-gray-500">{cuisines.join(", ")}</p>
					<p className="text-sm text-gray-500 inline-flex">{areaName}</p>
					<span className="uppercase text-sm text-gray-500">
						{", "}
						{lastMileTravelString}
					</span>
					<p className="mt-2 text-sm ">
						<span className="inline-flex mr-2">
							<FaExclamationCircle />
						</span>
						<span className="text-gray-500">{message}</span>
					</p>
				</section>
				<section className="ml-auto">
					<section className="border border-gray-300 divide-y">
						<p className="flex items-center text-sm text-center font-extrabold text-green-600 py-2">
							<span className="inline-flex ml-auto mr-1">
								<FaStar />
							</span>
							<span className="mr-auto">{avgRatingString}</span>
						</p>
						<p className="text-[0.6rem] font-bold text-gray-400 px-1 py-[0.5rem] leading-loose uppercase">
							{totalRatingsString}
						</p>
					</section>
				</section>
			</section>
			<section className="text-sm font-extrabold py-2">
				<p className="my-4 flex items-center">
					<span className="inline-flex mr-3 text-lg">
						<FaClock />
					</span>
					<span>{slaString}</span>
					<span className="ml-10 mr-2 text-lg">
						<FaRupeeSign />
					</span>
					<span className="uppercase">{costForTwoMessage}</span>
				</p>
			</section>
			<section className="border-dashed border-b border-gray-400 pb-10 overflow-x-scroll no-scrollbar">
				<section className="flex">
					{offers.map((offer) => (
						<section>
							<section
								key={offer?.info?.offerIds[0]}
								className="border border-gray-300 rounded-xl py-2 px-4 mr-[0.55rem] w-64"
							>
								<p className="font-extrabold text-sm tracking-tighter text-gray-700  border-b border-gray-300">
									{offer?.info?.header}
								</p>
								<p className="text-xs tracking-tighter font-extrabold text-gray-400 pt-2">
									{offer?.info?.couponCode} {offer?.info?.description}
								</p>
								{/* <p className="text-xs tracking-tighter font-extrabold text-gray-400"></p> */}
							</section>
						</section>
					))}
				</section>
			</section>
			<section className="mt-8 divide-y-8 divide-slate-200">
				{categories.map((category, index) => (
					// Controlled Component
					<RestaurantCategory
						key={category?.card?.card.title}
						data={category?.card?.card}
						showItems={index === showIndex}
						setShowIndex={() => setShowIndex(index)}
					/>
				))}
			</section>
			<section className="bg-slate-100 p-4 text-xs text-gray-400">
				{restauarantLicenseInfo[0]?.card?.card?.text[0] && (
					<p className="border-b border-gray-400 py-5 flex items-center">
						<span className="inline-flex text-lg mr-4">
							<FaIdCard />
						</span>
						{restauarantLicenseInfo[0]?.card?.card?.text[0]}
					</p>
				)}
				<section className="mt-2 py-5">
					<p className="font-extrabold">
						{restauarantAddress[0]?.card?.card?.name}
					</p>
					<p>(Outlet:{restauarantAddress[0]?.card?.card?.area})</p>
					<p className="flex items-center pt-4 pb-20">
						<span className="inline-flex mr-2 text-lg">
							<FaLocationArrow />
						</span>
						{restauarantAddress[0]?.card?.card?.completeAddress}
					</p>
				</section>
			</section>
		</main>
	);
};

export default RestaurantMenu;
