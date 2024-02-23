import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
	const menu = useLoaderData();
	console.log(menu);
	return (
		<div>
			{menu.map(pizza => {
				return (
					<MenuItem
						pizza={pizza}
						key={pizza.id}
					/>
				);
			})}
		</div>
	);
}

export async function loader() {
	const menu = await getMenu();
	return menu;
}

export default Menu;
