import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import { getUserName } from "../user/userSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
	const cart = useSelector(getCart);
	// const userName = useSelector(state => state.user.userName);
	const userName = useSelector(getUserName);
	const dispatch = useDispatch();
	if (!cart.length) return <EmptyCart />;
	return (
		<div className="p-4 sm:p-7">
			<LinkButton to="/menu">&larr; Back to menu</LinkButton>

			<h2 className="mt-7 text-xl font-semibold">Your cart {userName}</h2>
			<ul className="flex flex-col divide-y divide-slate-200">
				{cart.map(item => (
					<CartItem
						key={item.pizzaId}
						item={item}
					/>
				))}
			</ul>
			<div className="mt-6 space-x-2">
				<Button
					type="primary"
					to="/order/new"
				>
					Order Pizzas
				</Button>
				<Button
					type="secondary"
					onClick={() => dispatch(clearCart())}
				>
					Clear cart
				</Button>
			</div>
		</div>
	);
}

export default Cart;
