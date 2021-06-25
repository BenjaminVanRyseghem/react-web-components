/* eslint-disable react/prop-types */
import React from "react";

function legendEntryStyle(backgroundColor) {
	return {
		color: "white",
		backgroundColor
	};
}

export default function LegendEntry({ label, index, chartData, toggleVisibility }) {
	let color = chartData.datasets[0].backgroundColor[index];

	return (
			<div
				className="wk-button wk-button-small legend-entry"
				style={legendEntryStyle(color)}
				onClick={(event) => toggleVisibility(index, event)}
			>
				{label}
			</div>
		);
}
