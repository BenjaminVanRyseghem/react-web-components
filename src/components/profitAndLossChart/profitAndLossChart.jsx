// eslint-disable-next-line filenames/match-exported,filenames/match-regex
import "chartjs-adapter-date-fns";
import ChartComponent from "react-chartjs-2";
import { format } from "date-fns";
import PropTypes from "prop-types";
import React from "react";

export default class ProfitAndLossChart extends React.Component {
	static nodeName = "finsit-profit-and-loss";

	static defaultProps = {
		small: false
	};

	static propTypes = {
		chartData: PropTypes.object.isRequired,
		small: PropTypes.bool
	};

	state = {};

	tooltipTitle(tooltipItem) {
		return format(new Date(tooltipItem[0].parsed.x), "LLLL yyyy");
	}

	buildConfig() {
		return {
			type: "bar",
			data: this.props.chartData,
			plugins: [
				{
					beforeDraw(chart) {
						if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColor) {
							let ctx = chart.canvas.getContext("2d");
							let { chartArea } = chart;

							ctx.save();
							ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
							ctx.fillRect(
								chartArea.left,
								chartArea.top,
								chartArea.right - chartArea.left,
								chartArea.bottom - chartArea.top
);
							ctx.restore();
						}
					}
				}
			],
			options: {
				chartArea: {
					backgroundColor: "#eee"
				},
				animation: {
					duration: 350
				},
				responsive: true,
				maintainAspectRatio: false,
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
							color: "#FFF"
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
			<div className="chartExample" style={{
				height: 294,
				width: "100%"
			}}>
				<ChartComponent

					/* height={this.props.small ? 257 : 294} */

					/* width={this.props.small ? 257 : 294} */
					{...this.buildConfig()}
				/>
			</div>
		);
	}
}
