/**
 * @module counterComponent
 */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { title, action } from "./counterComponent.module.css";

function Counter() {
	let [value, setValue] = useState(0);

	return (
		<>
			<h2 className={title}>React counter</h2>
			<div className={action} onClick={() => setValue(value - 1)}>-</div>
			<div className="value">{value}</div>
			<div className={action} onClick={() => setValue(value + 1)}>+</div>
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

// ReactDOM.render(<Counter/>, document.body)
