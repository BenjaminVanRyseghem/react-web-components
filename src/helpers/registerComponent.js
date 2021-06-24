/**
 * @module registerComponent
 */

import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
import withWKStyle from "hoc/withWKStyle";

export default function registerComponent(reactComponent) {
	let name = reactComponent.nodeName;
	let componentWithStyles = withWKStyle(reactComponent);

	if (!name) {
		throw new Error("Missing nodeName");
	}

	if (customElements.get(name)) {
		return componentWithStyles;
	}

	customElements.define(name, reactToWebComponent(componentWithStyles, React, ReactDOM, { shadow: true }));
	return componentWithStyles;
}
