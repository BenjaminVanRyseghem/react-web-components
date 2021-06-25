import { lightOrange, orange } from "helpers/colors";
import FakeLoadingComponent from "components/fakeLoadingComponent/fakeLoadingComponent";
import KeyFigureComponent from "components/kpi/keyFigure";
import kpiData from "components/kpi/kpi.json";
import LoadingCard from "components/loadingCard/loadingCard";
import LoadingChart from "components/loadingChart/loadingChart";
import ProfitAndLossChart from "components/profitAndLossChart/profitAndLossChart";
import React from "react";
import registerComponent from "helpers/registerComponent";

let kpi = kpiData[0];

const dates = [
	new Date(2009, 0, 1),
	new Date(2009, 1, 1),
	new Date(2009, 2, 1),
	new Date(2009, 3, 1),
	new Date(2009, 4, 1),
	new Date(2009, 5, 1),
	new Date(2009, 6, 1),
	new Date(2009, 7, 1),
	new Date(2009, 8, 1)
];

const values = dates.map((date, index) => kpi.values[index].value);

const chartData = {
	labels: dates,
	datasets: [
		{
			label: "Loss",
			data: values,
			hoverBackgroundColor: lightOrange,
			backgroundColor: orange,
			order: 2,
			yAxisID: "currency-axis",
			legendOrder: 0
		}
	]
};

class KeyFigureExpanded extends React.Component {
	static nodeName = "finsit-keyfigure-expanded";

	render() {
		return (
			<div className="periodReportArchiveExpanded">
				<h2>{kpi.name} overview</h2>
				<div className="widget-content expanded">
					<div>

						<FakeLoadingComponent
							as="kpi"
							data={kpi}
							loader={<LoadingCard/>}
						>
							<KeyFigureComponent/>
						</FakeLoadingComponent>
					</div>
					<div>
						<FakeLoadingComponent
							as="chartData"
							data={chartData}
							loader={<LoadingChart/>}
						>
							<ProfitAndLossChart small={false} />
						</FakeLoadingComponent>
					</div>
				</div>
			</div>
		);
	}
}

export default registerComponent(KeyFigureExpanded);
