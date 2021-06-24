import { black, green, grey, lightOrange, orange } from "helpers/colors";
import CommentCard from "components/commentCard/commentCard";
import FakeLoadingComponent from "components/fakeLoadingComponent/fakeLoadingComponent";
import periodReportData from "./periodReport.json";
import ProfitAndLossChart from "components/profitAndLossChart/profitAndLossChart";
import ProfitAndLossLegend from "components/profitAndLossLegend/profitAndLossLegend";
import PropTypes from "prop-types";
import React from "react";
import registerComponent from "helpers/registerComponent";

const dates = [
	new Date(2020, 0, 1),
	new Date(2020, 1, 1),
	new Date(2020, 2, 1),
	new Date(2020, 3, 1),
	new Date(2020, 4, 1),
	new Date(2020, 5, 1),
	new Date(2020, 6, 1),
	new Date(2020, 7, 1),
	new Date(2020, 8, 1),
	new Date(2020, 9, 1)
];

const buildConfig = (annualTrend) => ({
	labels: dates,
	datasets: [
		{
			label: "Loss",
			data: annualTrend.profitTrend,
			hoverBackgroundColor: lightOrange,
			backgroundColor: orange,
			order: 2,
			yAxisID: "currency-axis",
			legendOrder: 0
		},
		{
			label: "YTD Profit",
			data: annualTrend.accumulatedProfitTrend,
			borderColor: green,
			backgroundColor: "#eee",
			type: "line",
			order: 0,
			yAxisID: "currency-axis",
			legendOrder: 1,
			pointRadius: 7,
			pointHoverRadius: 10,
			pointBorderWidth: 3,
			pointHoverBorderWidth: 3
		},
		{
			label: "Income",
			data: annualTrend.incomeTrend,
			hoverBackgroundColor: grey,
			backgroundColor: black,
			order: 1,
			yAxisID: "currency-axis",
			legendOrder: 2,
			hidden: true
		},
		{
			label: "YTD Income",
			data: annualTrend.accumulatedIncomeTrend,
			borderColor: black,
			backgroundColor: "#eee",
			type: "line",
			order: 3,
			yAxisID: "currency-axis",
			legendOrder: 3,
			hidden: true,
			pointRadius: 7,
			pointHoverRadius: 10,
			pointBorderWidth: 3,
			pointHoverBorderWidth: 3

		}
	]
});

class PeriodReportArchiveExpanded extends React.Component {
	static propTypes = {
		data: PropTypes.object.isRequired
	}

	toggleDataset(dataset, index, { target }) {
		this.ref.toggleDataset(index);
		target.classList.toggle("inactive");
	}

	renderInner({ data }) {
		let chartData = buildConfig(data.annualTrend);

		return (
			<div className="widget-content expanded">
				<div>
					<CommentCard author={data.author} comment={data.comment} reportId={data.id}/>
				</div>
				<div>
					<ProfitAndLossLegend
						datasets={chartData.datasets}
						includeShowMore={false}
						isSmall={false}
						onToggleDataset={this.toggleDataset.bind(this)}
					/>
					<ProfitAndLossChart ref={(ref) => (this.ref = ref)} chartData={chartData}/>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div className="periodReportArchiveExpanded">
				<h2>{periodReportData.title}</h2>

				<FakeLoadingComponent data={periodReportData}>
					{this.renderInner.bind(this)}
				</FakeLoadingComponent>
			</div>
		);
	}
}

PeriodReportArchiveExpanded.nodeName = "finsit-period-report-archive-expanded";

export default registerComponent(PeriodReportArchiveExpanded);
