import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, deleteItem, getCurrentQuantityById } from "../cart/cartSlice";
import UpdateItemQuantity from "../cart/updateItemQuantity";

function MenuItem({ pizza }) {
	const dispatch = useDispatch();
	const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
	const pizzaQuantity = useSelector(getCurrentQuantityById(id));

	//Addition of item to the cart
	const handleAddToCart = () => {
		const newPizza = {
			pizzaId: id,
			name,
			quantity: 1,
			unitPrice,
			totalPrice: unitPrice * 1
		};
		dispatch(addItem(newPizza));
	};
	return (
		<li className="flex gap-4 py-1 ">
			<img
				src={imageUrl}
				alt={name}
				className={`h-28 ${soldOut ? "opacity-45 grayscale" : ""}`}
			/>
			<div className="flex flex-col grow mt-2">
				<p className="font-medium">{name}</p>
				<p className="text-sm italic capitalize text-stone-500">{ingredients.join(", ")}</p>
				<div className="mt-auto flex justify-between">
					{!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p className="uppercase text-red-500 text-sm"> Sold Out</p>}
					{!soldOut && (
						<>
							{!pizzaQuantity ? (
								<Button
									onClick={handleAddToCart}
									type="small"
								>
									ADD TO CART
								</Button>
							) : (
								<div className="flex items-center gap-2 md:gap-8">
									<UpdateItemQuantity
										id={id}
										quantity={pizzaQuantity}
									/>
									<Button
										type="small"
										onClick={() => dispatch(deleteItem(id))}
									>
										Delete
									</Button>
								</div>
							)}
						</>
					)}
				</div>
			</div>
		</li>
	);
}

export default MenuItem;
