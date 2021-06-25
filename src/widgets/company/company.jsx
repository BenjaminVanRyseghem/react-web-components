import { blue, orange } from "helpers/colors";
import { closingBalance } from "./companyTransitionBalance.json";
import CompanyChart from "components/companyChart/companyChart";
import FakeLoadingComponent from "components/fakeLoadingComponent/fakeLoadingComponent";
import LoadingChart from "components/loadingChart/loadingChart";
import React from "react";
import registerComponent from "helpers/registerComponent";
import ShowMoreButton from "components/showMoreButton/showMoreButton";

const data = {
	datasets: [
		{
			data: [
				Math.abs(closingBalance.totalLiability),
				Math.abs(closingBalance.totalAssets)
			],
			backgroundColor: [blue, orange]
		}
	],
	labels: ["Liabilities", "Assets"]
};

const buttonGroupStyle = {
	marginRight: 4,
	marginLeft: 4,
	display: "flex",
	gap: 4,
	height: 32,
	alignItems: "center"
};

function legendEntryStyle(backgroundColor) {
	return {
		color: "white",
		backgroundColor
	};
}

class Company extends React.Component {
	toggleVisibility(index, { target }) {
		this.ref.toggleDataset(index);
		target.classList.toggle("inactive");
	}

	renderLegendEntry(label, index, chartData) {
		let color = chartData.datasets[0].backgroundColor[index];
		return (
			<div
				className="wk-button wk-button-small legend-entry"
				style={legendEntryStyle(color)}
				onClick={this.toggleVisibility.bind(this, index)}
			>
				{label}
			</div>
		);
	}

	render() {
		return (
			<FakeLoadingComponent as="chartData" data={data} loader={<LoadingChart/>}>
				{({ chartData }) => (
					<>
						<div className="widget-toolbar company-chart-legend">
							<div className="wk-button-group-right" style={buttonGroupStyle}>
								{chartData.labels.map((each, index) => this.renderLegendEntry(
									each,
									index,
									chartData
								))}
								<ShowMoreButton onTriggerExpandView={() => Company.triggerExpandView()} />
							</div>
						</div>
						<div className="widget-content">
							<CompanyChart ref={(ref) => (this.ref = ref)} chartData={chartData}/>
						</div>
					</>
				)}
			</FakeLoadingComponent>
		);
	}
}

Company.nodeName = "finsit-company";

export default registerComponent(Company);
