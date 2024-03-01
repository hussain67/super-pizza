import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
	const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
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

					<Button type="small">ADD TO CART</Button>
				</div>
			</div>
		</li>
	);
}

export default MenuItem;
