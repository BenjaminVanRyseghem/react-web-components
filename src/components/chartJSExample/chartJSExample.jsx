// eslint-disable-next-line filenames/match-exported,filenames/match-regex
import "chartjs-adapter-date-fns";
import ChartComponent from "react-chartjs-2";
import { format } from "date-fns";
import React from "react";
import registerComponent from "helpers/registerComponent";

const rawData = [
	{
		date: new Date(2020, 0, 1),
		income: 4000,
		liabilities: 0.2400
	},
	{
		date: new Date(2020, 1, 1),
		income: 2390,
		liabilities: 0.3800
	},
	{
		date: new Date(2020, 2, 1),
		income: 2390,
		liabilities: 0.2390
	},
	{
		date: new Date(2020, 3, 1),
		income: 2390,
		liabilities: 0.3800
	}
];

function buildData(data) {
	let result = {
		labels: [],
		income: [],
		liabilities: []
	};
	data.forEach(({ date, income, liabilities }) => {
		result.labels.push(date);
		result.income.push(income);
		result.liabilities.push(liabilities);
	});

	return {
		labels: result.labels,
		datasets: [
			{
				label: "Income",
				data: result.income,
				borderColor: "#F00",
				hoverBackgroundColor: "#00F",
				backgroundColor: "#F00",
				order: 1,
				yAxisID: "income-axe"
			},
			{
				label: "Liabilities",
				data: result.liabilities,
				borderColor: "#0F0",
				backgroundColor: "#eee",
				type: "line",
				order: 0,
				yAxisID: "liabilities-axe"
			}
		]
	};
}

function title(tooltipItem) {
	return format(new Date(tooltipItem[0].parsed.x), "LLLL yyyy");
}

const config = {
	type: "bar",
	data: buildData(rawData),
	options: {
		animation: {
			duration: 0
		},
		responsive: true,
		plugins: {
			tooltip: {
				callbacks: {
					title
				}
			},
			legend: {
				position: "top"
			},
			title: {
				display: true,
				text: "Chart.js Combined Line/Bar Chart"
			}
		},
		scales: {
			x: {
				type: "time",
				display: true,
				offset: true,
				time: {
					unit: "month"
				}
			},
			"income-axe": {
				type: "linear",
				position: "left"

			},
			"liabilities-axe": {
				type: "linear",
				position: "right",
				ticks: {
					max: 1,
					min: 0
				}
			}
		}
	}
};

export default class ChartJSExample extends React.Component {
	static nodeName = "chart2-example";

	static defaultProps = {};

	static propTypes = {};

	state = {};

	render() {
		return (
			<div className="chartExample" style={{ height: "1000px" }}>
				<ChartComponent {...config}/>
			</div>
		);
	}
}

registerComponent(ChartJSExample);
