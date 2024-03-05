// Test Id: IIDSAT
import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import { calcMinutesLeft, formatCurrency, formatDate } from "../../utils/helpers";
import OrderItem from "./OrderItem";
// const order = {
// 	id: "ABCDEF",
// 	customer: "Shahid",
// 	phone: "123456789",
// 	address: "Aston, Birmingham, UK",
// 	priority: true,
// 	estimatedDelivery: "2024-04-25T10:00:00",
// 	cart: [
// 		{
// 			pizzaId: 7,
// 			name: "Napoli",
// 			quentity: 4,
// 			unitPrice: 16,
// 			totalPrice: 64
// 		},
// 		{
// 			pizzaId: 6,
// 			name: "Romana",
// 			quentity: 3,
// 			unitPrice: 10,
// 			totalPrice: 30
// 		},
// 		{
// 			pizzaId: 7,
// 			name: "Vegana",
// 			quentity: 2,
// 			unitPrice: 20,
// 			totalPrice: 40
// 		}
// 	],
// 	position: "-9.000,38.000",
// 	orderPrice: 95,
// 	priorityPrice: 19
// };

function Order() {
	const order = useLoaderData();
	const { id, cart, status, priority, priorityPrice, orderPrice, estimatedDelivery } = order;
	const deliveryIn = calcMinutesLeft(estimatedDelivery);
	return (
		<div className="space-y-8 py-6 px-4">
			<div className="flex flex-wrap items-center justify-between gap-6">
				<h2 className="text-xl font-semibold flex space-x-3">
					<span>Order</span> <span> #{id}</span> <span> Status</span>
				</h2>

				<div className="space-x-2">
					{priority && <span className="bg-red-500 px-3 py-1 uppercase text-red-50 text-sm tracking-wider rounded-full">Priority </span>}
					<span className="bg-green-500 text-green-50 rounded-full px-3 py-1 text-sm tracking-wider uppercase">{status} order</span>
				</div>
			</div>

			<div className=" bg-stone-200 p-5 space-y-2 flex flex-wrap items-center justify-between gap-2">
				<p>{deliveryIn >= 0 ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃` : "Order should have arrived"}</p>
				<p className="text-xs text-stone-500">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
			</div>
			<ul className="bg-stone-100 py-3 px-5 divide-y divide-stone-200 border-b border-t ">
				{cart.map(item => (
					<OrderItem
						item={item}
						key={item.pizzaId}
					/>
				))}
			</ul>
			<div className=" bg-stone-200 p-5 space-y-2 ">
				<p>Price pizza: {formatCurrency(orderPrice)}</p>
				{priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
				<p className="font-bold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
			</div>
		</div>
	);
}
export async function loader({ params }) {
	const order = await getOrder(params.orderId);
	return order;
}
export default Order;
