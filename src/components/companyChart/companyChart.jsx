// eslint-disable-next-line filenames/match-exported,filenames/match-regex
import "chartjs-adapter-date-fns";
import ChartComponent from "react-chartjs-2";
import PropTypes from "prop-types";
import React from "react";

export default class ProfitAndLossChart extends React.Component {
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
