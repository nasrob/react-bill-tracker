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
		<form className="h-100 w-full flex items-center justify-center font-sans">
			<div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
				<div className="mb-4">
					<h1 className="text-grey-darkest">
						Enter a category of bills
					</h1>
					<p>E.g. 'Electricity' or 'Gas' or 'Internet'</p>
					<div className="flex mt-4">
						<input
							className="shadow appearnce-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
							placeholder="Add a category"
							value={category}
							onChange={handleChange}
						/>
						<button
							className="flex-no-shrink p-2 border-2 rounded bg-teal text-white border-teal hover:text-white hover:bg-teal"
							onClick={handleSubmit}
						>
							Add
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default AddCategory;
