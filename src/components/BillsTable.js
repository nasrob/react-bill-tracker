import React, { useState } from "react";
import Moment from "react-moment";

const BillsTable = (props) => {
	const [shouldShowAddBill, setShouldShowAddBill] = useState(false);

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
				{props.bills.map((value, index) => {
					return (
						<tr className="p4" key={index}>
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
