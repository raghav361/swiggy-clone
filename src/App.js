import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	);
};

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <AppLayout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/cart",
					element: <Cart />,
				},
				{
					path: "/restaurants/:restaurantName/:restaurantID",
					element: <RestaurantMenu />,
				},
			],
		},
	]);
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
