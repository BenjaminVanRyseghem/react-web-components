// eslint-disable-next-line filenames/match-exported,filenames/match-regex
import "chartjs-adapter-date-fns";
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
				maintainAspectRatio: false,
				responsive: true,
				plugins: {
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

	render() {
		return (
			<div className="chartExample" style={{
				height: 294,
				width: "100%"
			}}>
				<ChartComponent {...this.buildConfig()}/>
			</div>
		);
	}
}
