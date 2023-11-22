import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

import SWIGGY_LOGO from "../assets/images/swiggy-logo.png";

const Header = () => {
	return (
		<main className="flex justify-around shadow-xl fixed w-full top-0 bg-white opacity-100 z-10">
			<section className="my-auto hover:scale-90">
				<Link to="/">
					<img className="w-9" src={SWIGGY_LOGO} alt="Company Logo" />
				</Link>
			</section>
			<nav>
				<ul className="flex p-4 m-2">
					<li className="px-14 inline-flex">
						<span className="m-1 text-lg">
							<FaSearch />
						</span>
						<span className="font-normal px-2">Search</span>
					</li>

					<Link to="/cart">
						<li className="px-14 inline-flex">
							<span className="m-1 text-lg">
								<FaShoppingCart />
							</span>
							<span className="font-normal px-2">Cart</span>
						</li>
					</Link>
				</ul>
			</nav>
		</main>
	);
};

export default Header;
