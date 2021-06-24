// eslint-disable-next-line filenames/match-exported,filenames/match-regex
import "chartjs-adapter-date-fns";
import ChartComponent from "react-chartjs-2";
import { format } from "date-fns";
import PropTypes from "prop-types";
import React from "react";

export default class ProfitAndLossChart extends React.Component {
	static nodeName = "finsit-profit-and-loss";

	static defaultProps = {};

	static propTypes = {
		chartData: PropTypes.object.isRequired
	};

	state = {};

	tooltipTitle(tooltipItem) {
		return format(new Date(tooltipItem[0].parsed.x), "LLLL yyyy");
	}

	buildConfig() {
		return {
			type: "bar",
			data: this.props.chartData,
			options: {
				animation: {
					duration: 350
				},
				responsive: true,
				plugins: {
					tooltip: {
						callbacks: {
							title: this.tooltipTitle.bind(this)
						}
					},
					legend: {
						position: "bottom",

						labels: {
							sort: (legend1, legend2, { datasets }) => {
								let dataset1 = datasets[legend1.datasetIndex];
								let dataset2 = datasets[legend2.datasetIndex];

								return dataset1.legendOrder < dataset2.legendOrder ? -1 : 1;
							}
						}
					}
				},
				scales: {
					x: {
						type: "time",
						display: true,
						offset: true,
						time: {
							unit: "month"
						},
						grid: {
							color: "#FF0000"
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
	}

	render() {
		return (
			<div className="chartExample" style={{ height: "1000px" }}>
			<ChartComponent {...this.buildConfig()}/>
			</div>
		);
	}
}
