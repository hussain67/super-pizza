function MenuItem({ pizza }) {
	const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
	return (
		<li>
			<img
				src={imageUrl}
				alt={name}
			/>
			<div>
				<p>{name}</p>
				<p>{ingredients.join(", ")}</p>
				<div>
					<p>{unitPrice}</p>
					<p> {soldOut}</p>
				</div>
			</div>
		</li>
	);
}

export default MenuItem;
