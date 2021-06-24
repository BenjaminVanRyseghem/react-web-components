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

	const WebComponent = reactToWebComponent(componentWithStyles, React, ReactDOM, { shadow: true });

	class WithCustomEvent extends WebComponent {
		constructor() {
			super(...arguments);

			let expandViewEvent = new CustomEvent("expandedviewopened", {
				detail: "expanded view triggered from sample web component"
			});
			this.dispatchEvent(expandViewEvent);
		}
	}

	customElements.define(name, WithCustomEvent);
	return componentWithStyles;
}
