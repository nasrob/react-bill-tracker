const NavBar = (props) => {
	const triggerShowAddCategory = () => {
		props.showAddCategory();
	};

	const setNewActiveCategory = (index) => {
		props.setNewActiveCategory(index);
	};

	const listStyle =
		"p-4 bg-grey-lighter hover:bg-grey-light uppercase font-black cursor-pointer";

	return (
		<ul className="list-reset inline flex justify-center border-b-4 mb-0">
			<li
				className={
					listStyle +
					(props.activeCategory === "" ||
					props.activeCategory === undefined
						? " bg-grey-dark"
						: " bg-grey-lighter")
				}
				onClick={() => setNewActiveCategory("")}
			>
				All
			</li>
			{props.categories
				? props.categories.map((value, index) => {
						return (
							<li
								className={
									listStyle +
									(props.activeCategory === index
										? " bg-grey-dark"
										: " bg-grey-lighter")
								}
								key={index}
								onClick={() => setNewActiveCategory(index)}
							>
								{value}
							</li>
						);
				  })
				: "<li>No categories</li>"}
			<li className={listStyle} onClick={triggerShowAddCategory}>
				➕
			</li>
		</ul>
	);
};

export default NavBar;
