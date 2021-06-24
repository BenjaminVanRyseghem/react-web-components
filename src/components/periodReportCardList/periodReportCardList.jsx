import PeriodReportCard from "components/periodReportCard/periodReportCard";
import PropTypes from "prop-types";
import React from "react";

export default class PeriodReportCardList extends React.Component {
	static defaultProps = {};

	static propTypes = {
		onExpandView: PropTypes.func.isRequired,
		summaries: PropTypes.array.isRequired
	};

	state = {};

	render() {
		return (
			<div className="period-report-card-list">
				{this.props.summaries.map((summary) => <PeriodReportCard
					key={summary.id}
					summary={summary}
					onExpandView={this.props.onExpandView}
				/>)}
			</div>
		);
	}
}
