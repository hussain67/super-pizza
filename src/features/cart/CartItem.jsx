import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { deleteItem } from "./cartSlice";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
	const { pizzaId, name, quantity, totalPrice } = item;
	const dispatch = useDispatch();
	return (
		<li className="flex justify-between py-4 items-center">
			<p>
				{quantity} &times; {name}
			</p>
			<div className="flex gap-4 items-center">
				<p>{formatCurrency(totalPrice)}</p>

				<UpdateItemQuantity
					id={pizzaId}
					quantity={quantity}
				/>
				<Button
					type="small"
					onClick={() => dispatch(deleteItem(pizzaId))}
				>
					Delete
				</Button>
			</div>
		</li>
	);
}

export default CartItem;
