import "./App.css";
import NavBar from "./components/NavBar";
import BillsTable from "./components/BillsTable";
import Chart from "./components/Chart";
import { useEffect, useState } from "react";
import AddCategory from "./components/AddCategory";

function App() {
	const [shouldShowCategory, setShouldShowCategory] = useState(true);
	const [categories, setCategories] = useState([]);

	const addCategory = (category) => {
		const updatedCategories = [...(categories || []), category];
		setCategories(updatedCategories);
		setShouldShowCategory(false);
		localStorage.setItem(
			"categories",
			JSON.stringify(updatedCategories)
		);
	};

	useEffect(() => {
		const categoriesInLocalStorage = JSON.parse(
			localStorage.getItem("categories")
		);

		if (categoriesInLocalStorage !== categories) {
			setCategories(categoriesInLocalStorage);
		}

		// if (!categories.length) {
		// 	setShouldShowCategory(true);
		// }

		setCategories(categoriesInLocalStorage);

		if (!categoriesInLocalStorage) {
			setShouldShowCategory(true);
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className="App">
			{shouldShowCategory ? (
				<AddCategory onSubmit={addCategory} />
			) : (
				<div>
					<NavBar />
					<div className="container flex">
						<div className="w-1/2">
							<BillsTable />
						</div>
						<div className="w-1/2">
							<Chart />
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
