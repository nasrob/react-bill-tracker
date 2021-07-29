import { useState } from "react";

const AddCategory = (props) => {
	const [category, setCategory] = useState();

	const handleChange = (event) => {
		console.log(event.target.value);
		setCategory(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!category) {
			alert("Please Enter a category");
			return;
		}

		props.onSubmit(category);
	};

	return (
		<form>
			<h1>Enter a category of bills</h1>
			<p>E.g. 'Electricity' or 'Gas' or 'Internet'</p>
			<input
				placeholder="Add a category"
				value={category}
				onChange={handleChange}
			/>
			<button onClick={handleSubmit}>Add</button>
		</form>
	);
};

export default AddCategory;
