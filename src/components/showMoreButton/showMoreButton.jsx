import React from "react";

export default function	ShowMoreButton({ onTriggerExpandView }) {
	return (
			<button
				className="wk-button wk-button-small wk-button-text wk-button-icon-right"
				type="button"
				onClick={onTriggerExpandView}
			>
				More
				<span aria-hidden="true" className="wk-icon-arrow-right"/>
			</button>
		);
}
