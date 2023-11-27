import { CDN_URL } from "../utils/constants";
import {
	FaRupeeSign,
	FaRegStopCircle,
	FaRegCaretSquareUp,
} from "react-icons/fa";

const RestaurantItemList = ({ items }) => {
	return (
		<main className="divide-y">
			{items.map((item) => (
				<section
					data-testid="items"
					key={item.card.info.id}
					className="py-10 flex justify-between items-center"
				>
					<section className="w-9/12">
						<section className="py-2">
							{item.card.info.isVeg === 1 ? (
								<span className="text-green-600 text-xl">
									<FaRegStopCircle />
								</span>
							) : (
								<span className="text-red-600 text-xl">
									<FaRegCaretSquareUp />
								</span>
							)}
							<p className="font-bold mt-1">{item.card.info.name}</p>
							<p className="text-sm my-1 inline-flex items-center">
								<FaRupeeSign />
								{item.card.info.price
									? item.card.info.price / 100
									: item.card.info.defaultPrice / 100}
							</p>
						</section>
						<p className="text-sm text-ellipsis">
							{item.card.info.description}
						</p>
					</section>
					<section className="w-3/12 p-2 ml-20">
						<section className="relative">
							{item.card.info.imageId && (
								<img
									src={CDN_URL + item.card.info.imageId}
									className="rounded-lg h-28 w-36 object-cover"
									alt="food item"
								/>
							)}
							<section className="absolute -bottom-4 mx-[1.18rem]">
								<button
									className="px-10 py-3 bg-white text-green-600 shadow-xl text-xs font-bold rounded-md"
									// onClick={() => handleAddItem(item)}
								>
									ADD
								</button>
							</section>
						</section>
					</section>
				</section>
			))}
		</main>
	);
};

export default RestaurantItemList;
