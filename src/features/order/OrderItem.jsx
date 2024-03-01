import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item }) {
	const { quantity, name, totalPrice } = item;

	return (
		<li>
			<div className="flex justify-between space-y-1">
				<p>
					<span className="font-bold">{quantity}&times;</span> {name}
				</p>
				<p className="font-bold"> {formatCurrency(totalPrice)}</p>
			</div>
		</li>
	);
}

export default OrderItem;
