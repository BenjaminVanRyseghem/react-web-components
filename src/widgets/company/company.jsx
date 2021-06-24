import { blue, lightOrange } from "helpers/colors";
import { closingBalance } from "./companyTransitionBalance.json";
import CompanyChart from "components/companyChart/companyChart";
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
			backgroundColor: [blue, lightOrange]
		}
	],
	labels: ["Liabilities", "Assets"]
};

function Company() {
	return (
		<FakeLoadingComponent as="chartData" data={data} loader={<LoadingChart/>}>
		  <CompanyChart/>
		</FakeLoadingComponent>
	);
}

Company.nodeName = "finsit-profit-and-loss";

export default registerComponent(Company);
