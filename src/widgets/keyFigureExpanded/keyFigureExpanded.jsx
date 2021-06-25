import React from "react";
import registerComponent from "helpers/registerComponent";

function KeyFigureExpanded() {
	return (
		<div className="widget-content expanded">
			<div>
				TODO LEFT
			</div>
			<div>
				TODO RIGHT
			</div>
		</div>
	);
}

KeyFigureExpanded.nodeName = "finsit-keyfigure-expanded";

export default registerComponent(KeyFigureExpanded);
