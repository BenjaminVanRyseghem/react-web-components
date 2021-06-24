import Johan from "components/commentCard/johan.png";
import PropTypes from "prop-types";

import React from "react";

export default class PeriodReportCard extends React.Component {
	static defaultProps = {
		isNew: false
	};

	static propTypes = {
		isNew: PropTypes.bool,
		onExpandView: PropTypes.func.isRequired,
		summary: PropTypes.object.isRequired
	};

	state = {};

	renderAvatar() {
		return (
			<div className="wk-docs-avatar">
				<div className="wk-avatar wk-avatar-small">
					<div className="wk-fishbowl-thumbs">
						<div className="wk-fishbowl-user-thumb">
							<img alt="Johan Degerfeldt" src={Johan}/>
						</div>
					</div>
				</div>
			</div>
		);
	}

	render() {
		let { summary } = this.props;

		return (
			<div className="wk-card-wrapper" onClick={this.props.onExpandView}>
				<div className="wk-file wk-card wk-card-is-favorited  wk-card-small">
					<a className="wk-card-body">
						{this.props.isNew && <div className="wk-tag-blue">New</div>}
						<h3 className="wk-card-title">
							<span className="icon"><div className="wk-icon-file"/></span>
							<span className="content">
							{summary.title}
							</span>
						</h3>
					<div className="wk-card-subtitle">From Johan Degerfeldt</div>
					</a>

					<button
						className="wk-card-favorite-button wk-button wk-button-icon wk-button-small"
						type="button"
					>
						<span className="wk-is-active">{this.renderAvatar()}</span>
					</button>
				</div>
			</div>
		);
	}
}
