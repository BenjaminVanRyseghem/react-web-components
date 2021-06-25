// eslint-disable-next-line filenames/match-exported,filenames/match-regex
import "chartjs-adapter-date-fns";
import { blue, orange } from "helpers/colors";
import ChartComponent, { Chart } from "react-chartjs-2";
import loadChartLabelsPlugin from "helpers/chartjs-plugin-labels";
import numbro from "numbro";
import PropTypes from "prop-types";
import React from "react";

loadChartLabelsPlugin(Chart);

export default class CompanyChart extends React.Component {
	static defaultProps = {};

	static propTypes = {
		chartData: PropTypes.object.isRequired
	};

	state = {};

	buildConfig() {
		return {
			type: "pie",
			data: this.props.chartData,
			options: {
				animation: {
					duration: 350
				},
				hoverBorderColor: "white",
				maintainAspectRatio: false,
				responsive: true,
				plugins: {
					tooltip: {
						enabled: false
					},
					legend: {
						display: false
					},
					labels: {
						render: ({ value }) => numbro(value).formatCurrency(),
						fontColor: "#fff",
						fontSize: 18,
						fontStyle: "bold"
					}
				}
			}
		};
	}

	toggleDataset(index) {
		let ci = this.ref;
		let color = ci.data.datasets[0].backgroundColor[index];

		if (color === "transparent") {
			ci.data.datasets[0].backgroundColor[index] = index ? orange : blue;
		} else {
			ci.data.datasets[0].backgroundColor[index] = "transparent";
		}
		ci.update();
	}

	render() {
		return (
			<div className="companyChart" style={{
				height: 254,
				width: "100%"
			}}>
				<ChartComponent ref={(ref) => (this.ref = ref)} {...this.buildConfig()}/>
			</div>
		);
	}
}
