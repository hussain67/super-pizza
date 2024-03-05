import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
	const quantity = useSelector(getTotalCartQuantity);
	const totalPrice = useSelector(getTotalCartPrice);

	// const cartInfo = cart?.reduce(
	// 	(acc, cur) => {
	// 		acc.quantity += cur.quantity;
	// 		acc.totalPrice += cur.totalPrice;
	// 		return acc;
	// 	},
	// 	{
	// 		quantity: 0,
	// 		totalPrice: 0
	// 	}
	// );
	if (!quantity) return null;
	return (
		<div className="bg-stone-800 px-4 py-4 text-sm text-stone-200 uppercase sm:px-6 md:text-base flex items-center justify-between">
			<p className="font-semibold text-stone-300 space-x-4 sm:space-x-6">
				<span>{quantity} pizzas</span>
				<span>£ {totalPrice}</span>
			</p>
			<Link to="/cart">Open Cart &rarr;</Link>
		</div>
	);
}

export default CartOverview;
