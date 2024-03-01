// import { useState } from "react";

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";

// // https://uibakery.io/regex-library/phone-number
const isValidPhone = str => /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(str);

const fakeCart = [
	{
		pizzaId: 12,
		name: "Mediterranean",
		quantity: 2,
		unitPrice: 16,
		totalPrice: 32
	},
	{
		pizzaId: 6,
		name: "Vegetale",
		quantity: 1,
		unitPrice: 13,
		totalPrice: 13
	},
	{
		pizzaId: 11,
		name: "Spinach and Mushroom",
		quantity: 1,
		unitPrice: 15,
		totalPrice: 15
	}
];

function CreateOrder() {
	// const [withPriority, setWithPriority] = useState(false);
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";
	const cart = fakeCart;
	const formError = useActionData();
	return (
		<div className="py-6 px-4 ">
			<h2 className="mb-8 font-semibold text-xl">Ready to order? Let go!</h2>

			<Form method="POST">
				<div className="mb-4 flex flex-col gap-2 sm:flex-row  sm:items-center">
					<label className="sm:basis-36">First Name</label>
					<div className="grow">
						<input
							type="text"
							name="customer"
							required
							className="input focus:outline-none focus:ring focus: ring-yellow-400 "
						/>
					</div>
				</div>

				<div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center">
					<label className="sm:basis-36">Phone number</label>
					<div className="grow">
						<input
							type="tel"
							name="phone"
							required
							className="input focus:outline-none focus:ring focus: ring-yellow-400"
						/>
						{formError?.phone && <p className="text-red-400 font-sm pt-2">{formError.phone}</p>}
					</div>
				</div>

				<div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center">
					<label className="sm:basis-36">Address</label>
					<div className="grow">
						<input
							type="text"
							name="address"
							required
							className="input focus:outline-none focus:ring focus: ring-yellow-400"
						/>
					</div>
				</div>

				<div className="flex gap-2 font-medium mb-8">
					<input
						type="checkbox"
						name="priority"
						id="priority"
						className="w-6 h-6 accent-yellow-400"
						// value={withPriority}
						// onChange={(e) => setWithPriority(e.target.checked)}
					/>
					<label htmlFor="priority">Want to yo give your order priority?</label>
				</div>
				<input
					type="hidden"
					name="cart"
					value={JSON.stringify(cart)}
				/>
				<div>
					<Button
						isSubmitting={isSubmitting}
						type="primary"
					>
						{isSubmitting ? "Submitting..." : "Order now"}
					</Button>
				</div>
			</Form>
		</div>
	);
}

export async function action({ request }) {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	console.log(data);
	const order = {
		...data,
		cart: JSON.parse(data.cart),
		priority: data.priority === "on"
	};
	console.log(order);
	const errors = {};
	if (!isValidPhone(order.phone)) {
		errors.phone = "Please provide your phone number, It is required to communicate with you";
	}
	if (Object.keys(errors).length > 0) return errors;
	const newOrder = await createOrder(order);
	return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
