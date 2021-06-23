// eslint-disable-next-line filenames/match-exported,filenames/match-regex
import "chartjs-adapter-date-fns";
import annualTrend from "./annual-trend.json";
import ChartComponent from "react-chartjs-2";
import { format } from "date-fns";
import React from "react";
import registerComponent from "helpers/registerComponent";

const dates = [
	new Date(2020, 0, 1),
	new Date(2020, 1, 1),
	new Date(2020, 2, 1),
	new Date(2020, 3, 1),
	new Date(2020, 4, 1),
	new Date(2020, 5, 1),
	new Date(2020, 6, 1),
	new Date(2020, 7, 1),
	new Date(2020, 8, 1),
	new Date(2020, 9, 1)
];

const data = {
	labels: dates,
	datasets: [
		{
			label: "Loss",
			data: annualTrend.profitTrend,
			borderColor: "#F00",
			hoverBackgroundColor: "#FED009",
			backgroundColor: "#EA8F00",
			order: 2,
			yAxisID: "currency-axis",
			legendOrder: 0
		},
		{
			label: "YTD Profit",
			data: annualTrend.accumulatedProfitTrend,
			borderColor: "#85BC20",
			backgroundColor: "#eee",
			type: "line",
			order: 0,
			yAxisID: "currency-axis",
			legendOrder: 1,
			pointRadius: 7,
			pointHoverRadius: 10,
			pointBorderWidth: 3,
			pointHoverBorderWidth: 3
		},
		{
			label: "Income",
			data: annualTrend.incomeTrend,
			borderColor: "#F00",
			hoverBackgroundColor: "#888888",
			backgroundColor: "#474747",
			order: 1,
			yAxisID: "currency-axis",
			legendOrder: 2,
			hidden: true
		},
		{
			label: "YTD Income",
			data: annualTrend.accumulatedIncomeTrend,
			borderColor: "#474747",
			backgroundColor: "#eee",
			type: "line",
			order: 3,
			yAxisID: "currency-axis",
			legendOrder: 3,
			hidden: true,
			pointRadius: 7,
			pointHoverRadius: 10,
			pointBorderWidth: 3,
			pointHoverBorderWidth: 3

		}
	]
};

function title(tooltipItem) {
	return format(new Date(tooltipItem[0].parsed.x), "LLLL yyyy");
}

const config = {
	type: "bar",
	data,
	options: {
		animation: {
			duration: 350
		},
		responsive: true,
		plugins: {
			tooltip: {
				callbacks: {
					title
				}
			},
			legend: {
				position: "bottom",

				labels: {
					// generateLabels: () => ["foo"],
					sort: (legend1, legend2, { datasets }) => {
						let dataset1 = datasets[legend1.datasetIndex];
						let dataset2 = datasets[legend2.datasetIndex];

						return dataset1.legendOrder < dataset2.legendOrder ? -1 : 1;
					}
				}
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
			"currency-axis": {
				type: "linear",
				position: "left",
				display: false
			},
			"percentage-axis": {
				type: "linear",
				position: "right",
				display: false,
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
