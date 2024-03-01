import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
	const navigate = useNavigate();
	const [query, setQuery] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		if (!query) return;
		navigate(`/order/${query}`);
		setQuery("");
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Search order #"
					onChange={e => setQuery(e.target.value)}
					value={query}
					className="w-28 rounded-full text-sm placeholder:text-stone-500 bg-yellow-300 px-3 py-1 sm:w-60 sm:focus:w-72 focus:outline-none transition-all duration-700"
				/>
			</form>
		</div>
	);
}

export default SearchOrder;
