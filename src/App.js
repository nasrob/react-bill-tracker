import { useEffect, useState } from "react";
import "./App.css";
import AddBill from "./components/AddBill";
import AddCategory from "./components/AddCategory";
import BillsTable from "./components/BillsTable";
import Chart from "./components/Chart";
import NavBar from "./components/NavBar";

function App() {
	const [shouldShowAddCategory, setShouldShowAddCategory] =
		useState(false);
	const [categories, setCategories] = useState([]);

	const [bills, setBills] = useState([]);
	const [shouldShowAddBill, setShouldShowAddBill] = useState(true);

	const [activeCategory, setActiveCategory] = useState();

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

		const billsInLocalStorage = JSON.parse(
			localStorage.getItem("bills")
		);

		if (categoriesInLocalStorage !== categories) {
			setCategories(categoriesInLocalStorage);
		}

		// if (!categories.length) {
		// 	setShouldShowCategory(true);
		// }

		setCategories(categoriesInLocalStorage);
		setBills(billsInLocalStorage);

		if (!categoriesInLocalStorage) {
			setShouldShowAddCategory(true);
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const showAddCategory = () => {
		setShouldShowAddCategory(true);
	};

	const addBill = (amount, category, date) => {
		const bill = { amount, category, date };
		const updatedBills = [...(bills || []), bill];
		setBills(updatedBills);
		setShouldShowAddBill(false);
		console.log("ad() bills in App", updatedBills);
		localStorage.setItem("bills", JSON.stringify(updatedBills));
	};

	const showAddBill = () => {
		setShouldShowAddBill(true);
	};

	const removeBill = (index) => {
		let updatedBills = [...bills];
		console.log("rmv() bills in App", updatedBills);
		updatedBills = updatedBills
			.slice(0, index)
			.concat(updatedBills.slice(index + 1, updatedBills.length));
		setBills(updatedBills);
		localStorage.setItem("bills", JSON.stringify(updatedBills));
	};

	const activeBills = () => {
		return bills
			.filter((bill) =>
				activeCategory ? bill.category === activeCategory : true
			)
			.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
	};

	const setNewActiveCategory = (index) => {
		setActiveCategory(index);
	};

	return (
		<div className="App">
			{shouldShowAddCategory ? (
				<AddCategory onSubmit={addCategory} />
			) : shouldShowAddBill ? (
				<AddBill onSubmit={addBill} categories={categories} />
			) : (
				<div>
					<NavBar
						categories={categories}
						showAddCategory={showAddCategory}
						activeCategory={activeCategory}
						setNewActiveCategory={setNewActiveCategory}
					/>
					<div className="container flex">
						<div className="w-1/2">
							<BillsTable
								bills={activeBills()}
								showAddBill={showAddBill}
								removeBill={removeBill}
							/>
						</div>
						<div className="w-1/2">
							<Chart bills={activeBills()} />
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
