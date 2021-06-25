import { blue, orange } from "helpers/colors";
import balanceSheetData from "./balance-sheet.json";
import { closingBalance } from "widgets/company/companyTransitionBalance.json";
import CompanyChartWithLegend from "components/companyChartWithLegend/companyChartWithLegend";
import CondensedReport from "components/condensedReport/condensedReport";
import FakeLoadingComponent from "components/fakeLoadingComponent/fakeLoadingComponent";
import LoadingChart from "components/loadingChart/loadingChart";
import LoadingTable from "components/loadingTable/loadingTable";
import React from "react";
import registerComponent from "helpers/registerComponent";

const chartData = {
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

function CompanyExpanded() {
	return (
		<div className="widget-content expanded">
			<div>
				<h3>Company chart</h3>
				<FakeLoadingComponent as="chartData" data={chartData} loader={<LoadingChart/>}>
					<CompanyChartWithLegend large/>
				</FakeLoadingComponent>
			</div>
			<div>
				<h3>Condensed balance sheet</h3>
				<FakeLoadingComponent data={balanceSheetData} loader={<LoadingTable/>}>
					{({ data }) => <CondensedReport {...data}/>}
				</FakeLoadingComponent>
			</div>
		</div>
	);
}

CompanyExpanded.nodeName = "finsit-company-expanded";

export default registerComponent(CompanyExpanded);
