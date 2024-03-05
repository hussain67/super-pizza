import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseQuantity, increaseQuantity } from "./cartSlice";

function UpdateItemQuantity({ id, quantity }) {
	const dispatch = useDispatch();
	return (
		<div className="flex gap-2 items-center">
			<Button
				type="round"
				onClick={() => dispatch(increaseQuantity(id))}
			>
				+
			</Button>
			<span>{quantity}</span>
			<Button
				type="round"
				onClick={() => dispatch(decreaseQuantity(id))}
			>
				-
			</Button>
		</div>
	);
}

export default UpdateItemQuantity;
