const NavBar = (props) => {
	const triggerShowAddCategory = () => {
		props.showAddCategory();
	};

	const listStyle =
		"p-4 bg-grey-lighter hover:bg-grey-light uppercase font-black cursor-pointer";

	return (
		<ul className="list-reset inline flex justify-center border-b-4 mb-0">
			{props.categories
				? props.categories.map((value, index) => {
						return (
							<li className={listStyle} key={index}>
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
