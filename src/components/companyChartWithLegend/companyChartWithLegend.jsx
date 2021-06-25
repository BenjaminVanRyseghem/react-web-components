import CompanyChart from "components/companyChart/companyChart";
import LegendEntry from "components/legendEntry/legendEntry";
import PropTypes from "prop-types";
import React from "react";
import ShowMoreButton from "components/showMoreButton/showMoreButton";

const buttonGroupStyle = {
	marginRight: 4,
	marginLeft: 4,
	display: "flex",
	gap: 4,
	height: 32,
	alignItems: "center"
};

export default class CompanyChartWithLegend extends React.Component {
	static propTypes = {
		chartData: PropTypes.object.isRequired,
		triggerExpandView: PropTypes.func.isRequired
	}

	toggleVisibility(index, { target }) {
		this.ref.toggleDataset(index);
		target.classList.toggle("inactive");
	}

	render() {
		let { chartData, triggerExpandView } = this.props;

		return (
			<>
				<div className="widget-toolbar company-chart-legend">
				    <div className="wk-button-group-right" style={buttonGroupStyle}>
						{chartData.labels.map((each, index) => <LegendEntry
								key={index}
								chartData={chartData}
								index={index}
								label={each}
								toggleVisibility={this.toggleVisibility.bind(this)}
							/>)}
						<ShowMoreButton onTriggerExpandView={triggerExpandView} />
				    </div>
				</div>
				<div className="widget-content">
				    <CompanyChart ref={(ref) => (this.ref = ref)} chartData={chartData}/>
				</div>
			</>
		);
	}
}
