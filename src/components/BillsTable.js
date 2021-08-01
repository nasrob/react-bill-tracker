import React, { useState } from "react";
import Moment from "react-moment";

const BillsTable = (props) => {
	const [shouldShowAddBill, setShouldShowAddBill] = useState(false);
	const triggerShowAddBill = () => {
		props.showAddBill();
	};

	return (
		<table className="table">
			<thead className="bg-blue text-white">
				<tr>
					<th scope="col">Date</th>
					<th scope="col">Amount</th>
					<th scope="col">Category</th>
					<th scope="col"></th>
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
							<td>
								<Moment format="MMMM D YYYY">{value.date}</Moment>
							</td>
							<td>${value.amount}</td>
							<td>{value.category}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default BillsTable;
