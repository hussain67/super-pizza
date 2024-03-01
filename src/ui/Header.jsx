import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
	return (
		<header className="bg-yellow-500 py-3 px-4 sm:px-6 border-b-2 border-stone-400  flex justify-between">
			<Link
				className="tracking-widest"
				to="/"
			>
				Super Pizza
			</Link>
			<SearchOrder />
			<UserName />
		</header>
	);
}

export default Header;
