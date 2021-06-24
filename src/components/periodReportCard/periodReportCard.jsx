// eslint-disable-next-line filenames/match-exported,filenames/match-regex
import PropTypes from "prop-types";
import React from "react";

export default class PeriodReportCard extends React.Component {
	static defaultProps = {};

	static propTypes = {
		summary: PropTypes.object.isRequired
	};

	state = {};

	render() {
		let { summary } = this.props;

		return (
			<article className="wk-card-wrapper">
				<div className="wk-card wk-card-tile">
					<a className="wk-card-body" href={`https://dev-damien.foretagsplatsen.se/Accounting2/Company/a-damien-U-1204101330#!/period-report?id=${summary.id}`}>
						<h3 className="wk-card-title"> {summary.title} </h3>
					</a>
					<input
						className="wk-card-select-checkbox"
						id={`card-${summary.id}-select`}
						name={`card-${summary.id}-select`}
						type="checkbox"
						value=""
					/>
					<label
						aria-label="Select card"
						className="wk-card-select-label"
						htmlFor={`card-${summary.id}-select`}
					></label>
				</div>
			</article>
		);
	}
}
