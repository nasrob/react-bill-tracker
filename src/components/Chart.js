import { Bar } from "react-chartjs-2";
import moment from "moment";

const Chart = () => {
	const last12Months = () => {
		const months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];

		const today = new Date();
		const orderedMonths = [];
		let month = today.getMonth() + 1;
		if (month === 12) month = 0; // correctly handle december

		for (let i = 0; i < 12; i++) {
			orderedMonths.push(months[month]);
			month === 11 ? (month = 0) : month++;
		}

		return orderedMonths;
	};

	return <div>Chart</div>;
};

export default Chart;
