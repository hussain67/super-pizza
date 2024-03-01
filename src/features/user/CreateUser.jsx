import { useState } from "react";
import Button from "../../ui/Button";

function CreateUser() {
	const [userName, setUserName] = useState("Shahid");
	return (
		<form action="">
			<p className="mb-4 text-sm text-stone-600 md:text-base ">👋 Welcome! Please start by telling your name</p>
			<input
				type="text"
				value={userName}
				placeholder="Your full name"
				onChange={e => setUserName(e.target.value)}
				className="input focus:outline-none focus:ring focus: ring-yellow-400 w-80 mb-8 bg-slate-50 "
			/>
			{userName !== "" && <div>{<Button type="primary">{"Start ordering"}</Button>}</div>}
		</form>
	);
}
export default CreateUser;
