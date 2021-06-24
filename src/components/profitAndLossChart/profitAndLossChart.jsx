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

	toggleDataset(index) {
		let ci = this.ref;
		if (ci.isDatasetVisible(index)) {
			ci.hide(index);
		} else {
			ci.show(index);
		}
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
						display: false
					},
					labels: {
						render: () => ""
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
						display: true,
						ticks: {
							display: false,
							showLabelBackdrop: false
						},
						grid: {
							tickLength: 0,
							drawBorder: false,
							color(context) {
								if (context.tick.value !== 0) {
									return false;
								}

								return "#fff";
							},
							padding: 0,
							backdropPadding: 0,
							z: -1 // eslint-disable-line id-length
						}
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
				height: this.props.small ? 254 : 430,
				width: "100%"
			}}>
				<ChartComponent
					ref={(ref) => (this.ref = ref)}
					{...this.buildConfig()}
				/>
			</div>
		);
	}
}
