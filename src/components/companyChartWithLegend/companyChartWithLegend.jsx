import CompanyChart from "components/companyChart/companyChart";
import LegendEntry from "components/legendEntry/legendEntry";
import PropTypes from "prop-types";
import React from "react";

export default class CompanyChartWithLegend extends React.Component {
	static defaultProps = {
		large: false
	}

	static propTypes = {
		chartData: PropTypes.object.isRequired,
		large: PropTypes.bool,
		triggerExpandView: PropTypes.func.isRequired
	}

	toggleVisibility(index, { target }) {
		this.ref.toggleDataset(index);
		target.classList.toggle("inactive");
	}

	render() {
		let { chartData } = this.props;

		return (
			<>
				<CompanyChart ref={(ref) => (this.ref = ref)} chartData={chartData} large={this.props.large}/>
				<div className={`legend ${this.props.large ? "large" : ""}`}>
					{chartData.labels.map((each, index) => <LegendEntry
						key={index}
						chartData={chartData}
						index={index}
						label={each}
						toggleVisibility={this.toggleVisibility.bind(this)}
					/>)}
				</div>
			</>
		);
	}
}
