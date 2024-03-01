import { Link } from "react-router-dom";

function LinkButton({ children, to }) {
	const className = "text-blue-300 hover:text-blue-700 hover:underline";
	return (
		<Link
			to={to}
			className={className}
		>
			{children}
		</Link>
	);
}

export default LinkButton;
