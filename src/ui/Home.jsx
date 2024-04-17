import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
	const userName = useSelector(state => state.user.userName);
	return (
		<div className="my-10 text-center sm:my-16">
			<h1 className="text-xl text-stone-700 font-semibold mb-8 md:text-3xl">
				Super Pizza
				<br />
				<span className="text-yellow-500">Freshly preapered with best ingradients</span>
			</h1>
			{userName === "" ? (
				<CreateUser />
			) : (
				<Button
					to="/menu"
					type="primary"
				>
					{" "}
					Continue ordering, {userName}
				</Button>
			)}
		</div>
	);
}

export default Home;
