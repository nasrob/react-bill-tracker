import React from "react";
import Moment from "react-moment";

const BillsTable = (props) => {
	// const [shouldShowAddBill, setShouldShowAddBill] = useState(false);

	const triggerShowAddBill = () => {
		props.showAddBill();
	};

	const removeBill = (index) => {
		props.removeBill(index);
	};

	return (
		<table className="table">
			<thead className="bg-blue text-white">
				<tr>
					<th scope="col" className="p-4">
						Date
					</th>
					<th scope="col" className="p-4">
						Amount
					</th>
					<th scope="col" className="p-4">
						Category
					</th>
					<th scope="col" className="p-4"></th>
				</tr>
			</thead>
			<tbody>
				<tr className="p-4 bg-blue-lighter text-center">
					<td colSpan="4">
						<button
							className="underline"
							onClick={triggerShowAddBill}
						>
							Add a new Bill
						</button>
					</td>
				</tr>
				{props.bills.map((value, index) => {
					return (
						<tr className="p-4" key={index}>
							<td className="p-4">
								<Moment format="MMMM D YYYY">{value.date}</Moment>
							</td>
							<td className="p-4">${value.amount}</td>
							<td className="p-4">{value.category}</td>
							<td className="p-4">
								<button onClick={() => removeBill(index)}>𝗫</button>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default BillsTable;
