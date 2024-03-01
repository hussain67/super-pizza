import CreateUser from "../features/user/createUser";

function Home() {
	return (
		<div className="my-10 text-center sm:my-16">
			<h1 className="text-xl text-stone-700 font-semibold mb-8 md:text-3xl">
				Super Pizza
				<br />
				<span className="text-yellow-500">Freshly preapered with best ingradients</span>
			</h1>
			<CreateUser />
		</div>
	);
}

export default Home;
