// eslint-disable-next-line filenames/match-exported,filenames/match-regex
import "chartjs-adapter-date-fns";
import React from "react";

const buttonGroupStyle = {
	marginRight: 4,
	marginLeft: 4,
	display: "flex"
};

const buttonStyle = (includeShowMore) => ({
	marginRight: 4,
	flex: `0 1 ${includeShowMore ? 20 : 25}%`
});

export default function profitAndLossLegend({
	datasets,
	onToggleDataset,
	onTriggerExpandView,
	includeShowMore = true,
	isSmall = true
}) {
	return <>
		<style>{`
					.wk-button.inactive {
						background-color: #ccc !important;
					}
				`}</style>
		<div className="wk-button-group-right" style={buttonGroupStyle}>
		  {datasets.map((dataset, index) => {
			if (isSmall && index > 1) {
				return null;
			}

			return renderLegendItem({
				dataset,
				index,
				onToggleDataset,
				includeShowMore
			});
		})}
			{includeShowMore && renderMoreButton({ onTriggerExpandView })}
		</div>
	</>;
}

function renderLegendItem({ dataset, index, onToggleDataset, includeShowMore }) {
	let isDisabled = dataset.hidden;
	return (
		<button
			key={index}
			className={`wk-button ${isDisabled ? "inactive" : ""}`}
			style={{
				...buttonStyle(includeShowMore),
				backgroundColor: dataset.type === "line" ? dataset.borderColor : dataset.backgroundColor
			}}
			onClick={(event) => onToggleDataset(dataset, index, event)}
		>
			{dataset.label}
		</button>
	);
}

function renderMoreButton({ onTriggerExpandView }) {
	return (
		<button
			className="wk-button wk-button-text wk-button-icon-right"
			style={buttonStyle(true)}
			type="button"
			onClick={onTriggerExpandView}
		>
			More<span aria-hidden="true" className="wk-icon-arrow-right"/>
		</button>
	);
}
