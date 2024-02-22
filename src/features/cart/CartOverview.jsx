import { Link } from "react-router-dom";

function CartOverview() {
	return (
		<div>
			<p>
				<span>3 pizzas</span>
				<span>£30</span>
			</p>
			<Link to="/cart">Open Cart &rarr;</Link>
		</div>
	);
}

export default CartOverview;
