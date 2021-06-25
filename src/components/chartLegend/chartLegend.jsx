/* eslint-disable react/prop-types */
// eslint-disable-next-line filenames/match-exported,filenames/match-regex
import "chartjs-adapter-date-fns";
import React from "react";

const buttonGroupStyle = {
	marginRight: 4,
	marginLeft: 4,
	display: "flex",
	gap: 4
};

const buttonStyle = () => ({
	flex: "0 1 25%"
});

export default function ChartLegend({
	datasets,
	onToggleDataset
}) {
	return <>
		<div className="wk-button-group-right" style={buttonGroupStyle}>
		  {datasets.map((dataset, index) => renderLegendItem({
			dataset,
			index,
			onToggleDataset
		}))}
		</div>
	</>;
}

function renderLegendItem({ dataset, index, onToggleDataset }) {
	let isDisabled = dataset.hidden;
	return (
		<button
			key={index}
			className={`wk-button wk-button-small ${isDisabled ? "inactive" : ""}`}
			style={{
				...buttonStyle(false),
				backgroundColor: dataset.type === "line" ? dataset.borderColor : dataset.backgroundColor
			}}
			onClick={(event) => onToggleDataset(dataset, index, event)}
		>
			{dataset.label}
		</button>
	);
}
