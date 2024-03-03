import { useLoaderData, Link } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";

function Menu() {
	const menu = useLoaderData();
	const userName = useSelector(state => state.user.userName);
	console.log(userName);
	return (
		<>
			<Link to={"/order/new"}>New Order</Link>
			<ul className="divide-y divide-stone-200">
				{menu.map(pizza => {
					return (
						<MenuItem
							pizza={pizza}
							key={pizza.id}
						/>
					);
				})}
			</ul>
		</>
	);
}

export async function loader() {
	const menu = await getMenu();
	return menu;
}

export default Menu;
