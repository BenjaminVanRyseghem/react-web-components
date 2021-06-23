/* eslint-disable filenames/match-exported,filenames/match-regex */
import React from "react";

/**
 * Inject WK style inside the shadow DOM
 */

const wkCssFundamentalsPath = "https://files.petton.fr/cassou/temp/all.min.css";

export default function withWKStyle(Component) {
	let fn = () => (
		<>
			<link href={wkCssFundamentalsPath} rel="stylesheet"/>
			<Component/>
		</>
	);

	fn.nodeName = Component.nodeName;
	return fn;
}
