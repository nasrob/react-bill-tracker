import "./App.css";
import NavBar from "./components/NavBar";
import BillsTable from "./components/BillsTable";
import Chart from "./components/Chart";
import { useState } from "react";
import AddCategory from "./components/AddCategory";

function App() {
	const [shouldShowCategory, setShouldShowCategory] = useState(true);
	const [categories, setCategories] = useState([]);

	const addCategory = (category) => {
		const updatedCategories = [...(categories || []), category];
		setCategories(updatedCategories);
		setShouldShowCategory(false);
	};

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
