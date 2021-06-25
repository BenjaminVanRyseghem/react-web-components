import Johan from "./johan.png";
import PropTypes from "prop-types";
import React from "react";

const cardStyle = {
	marginBottom: 22,
	minHeight: 330,
	border: "1px solid #dadada",
	borderLeft: "4px solid #c2de90",
	padding: "1rem 1.4rem",
	display: "flex",
	alignItems: "start",
	gap: "1.4rem"
};

export default class CommentCard extends React.Component {
	static defaultProps = {
		isDraft: false
	};

	static propTypes = {
		author: PropTypes.object.isRequired,
		comment: PropTypes.string.isRequired,
		isDraft: PropTypes.bool,
		reportId: PropTypes.string.isRequired
	};

	state = {};

	render() {
		let { isDraft, author, comment, reportId } = this.props;
		return (
			<div className="commentCard">
				<div style={cardStyle}>
					<div className="wk-avatar wk-avatar-extreme-large">
						<div className="wk-fishbowl-thumbs">
							<div className="wk-fishbowl-user-thumb">
								<img alt={author.name} src={Johan}/>
							</div>
						</div>
					</div>
					<div dangerouslySetInnerHTML={{ __html: comment }}/>
				</div>
			    <div className="widget-toolbar">
					<div className="wk-button-group">
						<a
							className="wk-button wk-button-icon-right"
							href={`https://web.foretagsplatsen.se/Accounting2/Company/a-damien-U-1204101330#!/period-report?id=${reportId}`}
							rel="noreferrer"
							target="_blank"
						>
							Open full report in finsit<span aria-hidden="true" className="wk-icon-export"/>
						</a>
						{isDraft && <button
							className="wk-button wk-button-icon-right"
						>
							Publish the report<span aria-hidden="true" className="wk-icon-send"/>
						</button>}
					</div>
				</div>

			</div>
		);
	}
}
