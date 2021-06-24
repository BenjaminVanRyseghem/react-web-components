import { black, green, grey, lightOrange, orange } from "helpers/colors";
import annualTrend from "./annual-trend.json";
import FakeLoadingComponent from "components/fakeLoadingComponent/fakeLoadingComponent";
import LoadingChart from "components/loadingChart/loadingChart";
import ProfitAndLossChart from "components/profitAndLossChart/profitAndLossChart";
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

const data = {
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
};

const buttonGroupStyle = {
	marginRight: 4,
	marginLeft: 4,
	display: "flex"
};

const buttonStyle = {
	marginRight: 4,
	flex: "0 1 20%"
};

class ProfitAndLoss extends React.Component {
	toggleDataset(dataset, index, { target }) {
		this.ref.toggleDataset(index);
		target.classList.toggle("inactive");
	}

	renderLegendItem(dataset, index) {
		let isDisabled = dataset.hidden;
		return (
			<button
				key={index}
				className={`wk-button ${isDisabled ? "inactive" : ""}`}
				style={{
					...buttonStyle,
					backgroundColor: dataset.type === "line" ? dataset.borderColor : dataset.backgroundColor
				}}
				onClick={this.toggleDataset.bind(this, dataset, index)}
			>
				{dataset.label}
			</button>
		);
	}

	renderMoreButton() {
		return (
			<button
				className="wk-button wk-button-text wk-button-icon-right"
				style={buttonStyle}
				type="button"
				onClick={() => ProfitAndLoss.triggerExpandView()}
			>
				Show more<span aria-hidden="true" className="wk-icon-arrow-right"></span>
			</button>
		);
	}

	render() {
		return (
			<>
				<style>{`
					.wk-button.inactive {
						background-color: #ccc !important;
					}
				`}</style>
				<div className="widget-toolbar">
					<div className="wk-button-group-right" style={buttonGroupStyle}>
						{data.datasets.map(this.renderLegendItem.bind(this))}
						{this.renderMoreButton()}
					</div>
				</div>
				<div className="widget-content">
					<FakeLoadingComponent as="chartData" data={data} loader={<LoadingChart/>}>
						<ProfitAndLossChart ref={(ref) => (this.ref = ref)} small/>
					</FakeLoadingComponent>
				</div>
			</>
		);
	}
}

ProfitAndLoss.nodeName = "finsit-profit-and-loss";

export default registerComponent(ProfitAndLoss);
