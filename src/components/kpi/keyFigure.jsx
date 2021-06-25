import numbro from "numbro";
import { orange } from "helpers/colors";
import PropTypes from "prop-types";
import React from "react";

function formatCurrency(entry) {
	return numbro(entry.value).formatCurrency();
}

function formatDate(value) {
	return value.periodName;
}

export default function KeyFigure({ kpi, onClick }) {
	let current = kpi.values[kpi.current];
	let min = kpi.values[kpi.min];
	let max = kpi.values[kpi.max];

	return (
		<section
			className="wk-card-container wk-card-container-h-dividers kpi-card clickable"
			onClick={onClick}
		>
			<header className="wk-card-container-header kpi-value kpi-current">
				<h2 style={{ color: orange }}>{formatCurrency(current)}</h2>
				<div className="wk-text-muted-lighter wk-card-subtitle">{formatDate(current)}</div>
			</header>
			<div className="wk-card-container-body">
				<div className="wk-card-container-body-cell kpi-value kpi-min">
					<span className="title">Min:</span>
					<strong className="value">{formatCurrency(min)}</strong>
					<span className="wk-text-muted-lighter period">{formatDate(min)}</span>
				</div>
				<div className="wk-card-container-body-cell kpi-value kpi-max">
					<span className="title">Max:</span>
					<strong className="value">{formatCurrency(max)}</strong>
					<span className="wk-text-muted-lighter period">{formatDate(max)}</span>
				</div>
			</div>
		</section>
	);
}

KeyFigure.propTypes = {
	kpi: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired
};
