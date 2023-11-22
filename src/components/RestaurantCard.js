import { FaStar, FaCircle } from "react-icons/fa";

import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
	const { resData } = props;

	const {
		name,
		cloudinaryImageId,
		locality,
		costForTwo,
		cuisines,
		avgRating,
		sla,
		aggregatedDiscountInfoV3,
	} = resData;

	return (
		<main className="mx-6 mb-6 hover:scale-95 hover:transition hover:duration-200 hover:ease-in-out">
			<section className="relative z-1">
				<img
					className="rounded-xl h-40 w-60 object-cover"
					alt="Restaurant"
					src={CDN_URL + cloudinaryImageId}
				/>
				<section className="absolute bottom-0 w-full bg-gradient-to-t from-black rounded-bl-xl rounded-br-xl">
					{aggregatedDiscountInfoV3?.header &&
					aggregatedDiscountInfoV3?.subHeader ? (
						<p className="text-white font-extrabold text-[1.35rem] tracking-tighter pl-[0.3rem] pb-1">
							{aggregatedDiscountInfoV3?.header +
								" " +
								aggregatedDiscountInfoV3?.subHeader}
						</p>
					) : (
						<p className="text-white uppercase font-extrabold text-[1.35rem] tracking-tighter pl-[0.3rem] pb-1">
							{costForTwo}
						</p>
					)}
				</section>
			</section>
			<section className="font-body w-56 p-2">
				<p className="truncate font-semibold text-lg">{name}</p>
				<span className="rounded-full inline-flex bg-green-400 p-[0.15rem] mr-1 w-[1.25rem]">
					<FaStar />
				</span>
				<span className="font-semibold text-base">{avgRating}</span>
				<span className="inline-flex w-1 mx-[0.3rem]">
					<FaCircle />
				</span>
				<span className="font-semibold text-base">{sla?.slaString}</span>
				<p className="truncate font-thin">{cuisines.join(", ")}</p>
				<p className="capitalize truncate font-thin">{locality}</p>
			</section>
		</main>
	);
};

export default RestaurantCard;
