import { Link } from "react-router-dom";

function CartOverview() {
	return (
		<div className="bg-stone-800 px-4 py-4 text-sm text-stone-200 uppercase sm:px-6 md:text-base flex items-center justify-between">
			<p className="font-semibold text-stone-300 space-x-4 sm:space-x-6">
				<span>3 pizzas</span>
				<span>£30</span>
			</p>
			<Link to="/cart">Open Cart &rarr;</Link>
		</div>
	);
}

export default CartOverview;
