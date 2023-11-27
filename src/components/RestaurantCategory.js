import { FaChevronDown } from "react-icons/fa";

import RestaurantItemList from "./RestaurantItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
	const handleClick = () => {
		setShowIndex();
	};

	return (
		<main>
			<section className="my-4">
				<section
					className="cursor-pointer flex justify-between"
					onClick={handleClick}
				>
					<span className="font-extrabold text-xl">
						{data.title} ({data.itemCards.length})
					</span>
					<p className="flex items-center">
						<span>
							<FaChevronDown />
						</span>
					</p>
				</section>
				{showItems && <RestaurantItemList items={data.itemCards} />}
			</section>
		</main>
	);
};

export default RestaurantCategory;
