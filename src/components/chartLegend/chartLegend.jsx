// eslint-disable-next-line filenames/match-exported,filenames/match-regex
import "chartjs-adapter-date-fns";
import React from "react";
import ShowMoreButton from "components/showMoreButton/showMoreButton";

const buttonGroupStyle = {
	marginRight: 4,
	marginLeft: 4,
	display: "flex",
	gap: 4
};

const buttonStyle = (includeShowMore) => ({
	flex: `0 1 ${includeShowMore ? 20 : 25}%`
});

export default function ChartLegend({
	datasets,
	onToggleDataset,
	onTriggerExpandView,
	includeShowMore = false,
	isSmall = false
}) {
	return <>
		<div className="wk-button-group-right" style={buttonGroupStyle}>
		  {!isSmall && datasets.map((dataset, index) => renderLegendItem({
			dataset,
			index,
			onToggleDataset,
			includeShowMore
		}))}
			{includeShowMore && <ShowMoreButton onTriggerExpandView={onTriggerExpandView} />}
		</div>
	</>;
}

function renderLegendItem({ dataset, index, onToggleDataset, includeShowMore }) {
	let isDisabled = dataset.hidden;
	return (
		<button
			key={index}
			className={`wk-button wk-button-small ${isDisabled ? "inactive" : ""}`}
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
