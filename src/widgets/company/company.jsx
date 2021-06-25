import { blue, orange } from "helpers/colors";
import { closingBalance } from "./companyTransitionBalance.json";
import CompanyChartWithLegend from "components/companyChartWithLegend/companyChartWithLegend";
import FakeLoadingComponent from "components/fakeLoadingComponent/fakeLoadingComponent";
import LoadingChart from "components/loadingChart/loadingChart";
import React from "react";
import registerComponent from "helpers/registerComponent";

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

class Company extends React.Component {
	render() {
		return (
			<FakeLoadingComponent as="chartData" data={data} loader={<LoadingChart/>}>
				<CompanyChartWithLegend showMore triggerExpandView={() => Company.triggerExpandView()}/>
			</FakeLoadingComponent>
		);
	}
}

Company.nodeName = "finsit-company";

export default registerComponent(Company);
