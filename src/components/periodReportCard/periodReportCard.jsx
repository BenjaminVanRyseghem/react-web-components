import PropTypes from "prop-types";
import React from "react";

export default class PeriodReportCard extends React.Component {
	static defaultProps = {};

	static propTypes = {
		onExpandView: PropTypes.func.isRequired,
		summary: PropTypes.object.isRequired
	};

	state = {};

	render() {
		let { summary } = this.props;

		return (
			<article className="wk-card-wrapper" onClick={this.props.onExpandView}>
				<div className="wk-card wk-card-tile">
					<div className="wk-card-body">
						<h3 className="wk-card-title"> {summary.title} </h3>
					</div>
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
					/>
				</div>
			</article>
		);
	}
}
