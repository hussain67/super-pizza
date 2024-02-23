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
					onChange={e => setQuery(e.target.value)}
					value={query}
				/>
			</form>
		</div>
	);
}

export default SearchOrder;
