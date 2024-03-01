import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
	const { name, quantity, totalPrice } = item;
	return (
		<li className="flex justify-between py-4">
			<p>
				{quantity}&times; {name}
			</p>
			<div className="flex gap-4">
				<p>{formatCurrency(totalPrice)}</p>
				<Button type="small">Delete</Button>
			</div>
		</li>
	);
}

export default CartItem;
