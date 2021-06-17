/**
 * @module counterComponent
 */
import React, { useState } from "react";
import registerComponent from "../../helpers/registerComponent";

const titleStyle = {
	color: "blue"
};

const actionStyle = {
	padding: "4x 10px",
	background: "olive",
	cursor: "pointer",
	color: "white"
};

export default function ReactCounter() {
	let [value, setValue] = useState(0);

	return (
		<>
			<h2 style={titleStyle}>React counter</h2>
			<div style={actionStyle} onClick={() => setValue(value - 1)}>-</div>
			<div className="value">{value}</div>
			<div style={actionStyle} onClick={() => setValue(value + 1)}>+</div>
		</>
	);
}

ReactCounter.nodeName = "react-counter";

registerComponent(ReactCounter)
