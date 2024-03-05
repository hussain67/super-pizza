import { useLoaderData, Link } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
	const menu = useLoaderData();

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
