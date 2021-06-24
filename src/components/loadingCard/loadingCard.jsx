/* eslint-disable react/no-unknown-property */
import React from "react";

export default function LoadingCard() {
	return (
		<svg aria-labelledby="i5uy8vyxeyho-aria" height="254" preserveAspectRatio="none" role="img" style={{ border: "1px solid rgb(218, 218, 218)" }} viewBox="0 0 520 240" width="100%">
			<rect fill="#dadada" height="12" width="157.62" x="32" y="59"/>
			<rect fill="#dadada" height="12" width="150.59" x="32" y="172"/>
			<title id="i5uy8vyxeyho-aria">Loading...</title>
			<rect clip-path="url(#i5uy8vyxeyho-diff)" height="100%" role="presentation" style={{ fill: "url(#i5uy8vyxeyho-animated-diff)" }} width="100%" x="0" y="0"/>
			<defs role="presentation">
				<clipPath id="i5uy8vyxeyho-diff">
					<rect fill="#bfbfbf" height="12" width="70" x="32" y="332"/>
					<rect fill="#bfbfbf" height="12" width="70" x="117" y="332"/>
					<rect fill="#bfbfbf" height="12" width="34" x="254" y="332"/>
					<rect fill="#bfbfbf" height="12" width="207.81" x="32" y="89"/>
					<rect fill="#bfbfbf" height="12" width="228.89" x="32" y="115"/>
					<rect fill="#bfbfbf" height="12" width="249.98" x="32" y="141"/>
					<path d="M40,24h64a8,8,0,0,1,8,8h0a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8h0A8,8,0,0,1,40,24Z" fill="#bfbfbf" fill-rule="evenodd"/>
					<rect fill="#bfbfbf" height="12" width="256" x="32" y="216"/>
					<rect fill="#bfbfbf" height="12" width="239.94" x="32" y="240"/>
					<rect fill="#bfbfbf" height="12" width="162.64" x="32" y="288"/>
					<rect fill="#bfbfbf" height="12" width="256" x="32" y="264"/>
				</clipPath>
				<linearGradient id="i5uy8vyxeyho-animated-diff">
					<stop offset="0%" stop-color="#bfbfbf" stop-opacity="1">
						<animate attributeName="offset" dur="1.2s" keyTimes="0; 0.5; 1" repeatCount="indefinite" values="-1; -1; 1"/>
					</stop>
					<stop offset="50%" stop-color="#dadada" stop-opacity="1">
						<animate attributeName="offset" dur="1.2s" keyTimes="0; 0.5; 1" repeatCount="indefinite" values="-0.5; -0.5; 1.5"/>
					</stop>
					<stop offset="100%" stop-color="#bfbfbf" stop-opacity="1">
						<animate attributeName="offset" dur="1.2s" keyTimes="0; 0.5; 1" repeatCount="indefinite" values="0; 0; 2"/>
					</stop>
				</linearGradient>
			</defs>
		</svg>
	);
}
