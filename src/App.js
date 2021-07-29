import "./App.css";
import NavBar from "./components/NavBar";
import BillsTable from "./components/BillsTable";
import Chart from "./components/Chart";

function App() {
	return (
		<div className="App">
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
	);
}

export default App;
