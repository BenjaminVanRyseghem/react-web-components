// eslint-disable-next-line filenames/match-exported,filenames/match-regex
import PeriodReportCard from "components/periodReportCard/periodReportCard";
import PropTypes from "prop-types";
import React from "react";

export default class PeriodReportCardList extends React.Component {
	static defaultProps = {};

	static propTypes = {
		summaries: PropTypes.array.isRequired
	};

	state = {};

	render() {
		return (
			<div className="period-report-card-list">
				{this.props.summaries.map((summary) => <PeriodReportCard key={summary.id} summary={summary} />)}
			</div>
		);
	}
}
