import { Link } from "react-router-dom";

function Button({ children, isSubmitting, type, to }) {
	const base = "text-sm rounded-full  bg-yellow-400  focus:outline-none focus:ring focus: ring-yellow-200 focus:ring-offset-1 text-stone-700 font-semibold uppercase tracking-wide hover:bg-yellow-300";
	const styles = {
		primary: base + " px-4 py-3 md:px-6 md:py-4",
		small: base + "  px-2 py-1 md:px-4 md: py-2 text-xs",
		secondary: "text-sm rounded-full  bg-slate-300  focus:outline-none focus:ring focus: ring-slate-200  text-stone-500 font-semibold uppercase tracking-wide hover:bg-slate-200 px-4 py-3 md:px-6 md:py-4"
	};

	if (to)
		return (
			<Link
				to={to}
				className={styles[type]}
			>
				{children}
			</Link>
		);
	return (
		<button
			className={styles[type]}
			disabled={isSubmitting}
		>
			{children}
		</button>
	);
}

export default Button;
