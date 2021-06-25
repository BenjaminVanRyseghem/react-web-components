import { black, green, grey, lightOrange, orange } from "helpers/colors";
import ChartLegend from "components/chartLegend/chartLegend";
import CommentCard from "components/commentCard/commentCard";
import FakeLoadingComponent from "components/fakeLoadingComponent/fakeLoadingComponent";
import LoadingCard from "components/loadingCard/loadingCard";
import LoadingChart from "components/loadingChart/loadingChart";
import periodReportData from "./periodReport.json";
import ProfitAndLossChart from "components/profitAndLossChart/profitAndLossChart";
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

	render() {
		return (
			<div className="periodReportArchiveExpanded">
				<h2>{periodReportData.title}</h2>
				<div className="widget-content expanded">
					<div>

						<FakeLoadingComponent
							data={periodReportData}
							loader={<LoadingCard/>}
						>
							{({ data }) => <CommentCard
								author={data.author}
								comment={data.comment}
								reportId={data.id}
							/>}
						</FakeLoadingComponent>
					</div>
					<div>
						<FakeLoadingComponent
							data={periodReportData}
							loader={<LoadingChart/>}
						>
							{({ data }) => {
								let chartData = buildConfig(data.annualTrend);

								return <>
									<ChartLegend
										datasets={chartData.datasets}
										onToggleDataset={this.toggleDataset.bind(this)}
									/>
									<ProfitAndLossChart ref={(ref) => (this.ref = ref)} chartData={chartData}/>
								</>;
							}}
						</FakeLoadingComponent>
					</div>
				</div>
			</div>
		);
	}
}

PeriodReportArchiveExpanded.nodeName = "finsit-period-reports-expanded";

export default registerComponent(PeriodReportArchiveExpanded);
