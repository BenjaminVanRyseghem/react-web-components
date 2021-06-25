import { blue, orange } from "helpers/colors";
import { closingBalance } from "./companyTransitionBalance.json";
import CompanyChartWithLegend from "components/companyChartWithLegend/companyChartWithLegend";
import FakeLoadingComponent from "components/fakeLoadingComponent/fakeLoadingComponent";
import LoadingChart from "components/loadingChart/loadingChart";
import React from "react";
import registerComponent from "helpers/registerComponent";
import ShowMoreButton from "components/showMoreButton/showMoreButton";

const buttonGroupStyle = {
	marginRight: 4,
	marginLeft: 4,
	display: "flex",
	gap: 4,
	height: 32,
	alignItems: "center"
};

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

function Company() {
	return (
		<>
			<div className="widget-toolbar company-chart-legend">
				<div className="wk-button-group-right" style={buttonGroupStyle}>
					<ShowMoreButton onTriggerExpandView={() => Company.triggerExpandView()}/>
				</div>
			</div>
			<FakeLoadingComponent as="chartData" data={data} loader={<LoadingChart/>}>
				<CompanyChartWithLegend/>
			</FakeLoadingComponent>
		</>
	);
}

Company.nodeName = "finsit-company";

export default registerComponent(Company);
