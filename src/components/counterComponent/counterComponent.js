/**
 * @module counterComponent
 */
import React, { useState } from "react";
import ReactDOM from "react-dom";

const titleStyle = {
	color: "blue"
};

const actionStyle = {
	padding: "4x 10px",
	background: "olive",
	cursor: "pointer",
	color: "white"
};

function Counter() {
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

export default class ReactCounter extends HTMLElement {
	connectedCallback() {
		const mountPoint = document.createElement("span");
		this.attachShadow({ mode: "open" }).appendChild(mountPoint);

		ReactDOM.render(<Counter/>, mountPoint);
	}
}

customElements.define("react-counter", ReactCounter);
