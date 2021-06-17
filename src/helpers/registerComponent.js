/**
 * @module registerComponent
 */

import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";

export default function registerComponent(reactComponent) {
	let name = reactComponent.nodeName;
	if (!name) {
		throw new Error("Missing nodeName");
	}

	if(customElements.get(name)) {
		return;
	}

	customElements.define(name, reactToWebComponent(reactComponent, React, ReactDOM, { shadow: true }));
}
