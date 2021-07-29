import "./App.css";
import NavBar from "./components/NavBar";
import BillsTable from "./components/BillsTable";
import Chart from "./components/Chart";
import { useEffect, useState } from "react";
import AddCategory from "./components/AddCategory";

function App() {
	const [shouldShowAddCategory, setShouldShowAddCategory] =
		useState(false);
	const [categories, setCategories] = useState([]);

	const addCategory = (category) => {
		const updatedCategories = [...(categories || []), category];
		setCategories(updatedCategories);
		setShouldShowAddCategory(false);
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
			setShouldShowAddCategory(true);
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const showAddCategory = () => {
		setShouldShowAddCategory(true);
	};

	return (
		<div className="App">
			{shouldShowAddCategory ? (
				<AddCategory onSubmit={addCategory} />
			) : (
				<div>
					<NavBar
						categories={categories}
						showAddCategory={showAddCategory}
					/>
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
