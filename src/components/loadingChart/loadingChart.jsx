/* eslint-disable react/no-unknown-property */
import React from "react";

export default function loadingChart() {
	return (
        <svg preserveAspectRatio aria-labelledby="i1qdqs938vcz-aria" height="254" role="img" style={{ border: "1px solid rgb(191, 191, 191)" }} viewBox="0 0 540 378" width="100%">
            <polygon fill="#bfbfbf" fill-rule="evenodd" points="109.91 242.6 167.91 237 258.78 146.71 345.45 185.5 508 80 508 346 32 346 109.91 242.6">
            </polygon>
            <title id="i1qdqs938vcz-aria">Loading...
            </title>
            <rect clip-path="url(#i1qdqs938vcz-diff)" height="100%" role="presentation" style={{ fill: "url(#i1qdqs938vcz-animated-diff)" }} width="100%" x="0" y="0">
            </rect>
            <defs role="presentation">
                <clipPath id="i1qdqs938vcz-diff">
                    <rect fill="#bfbfbf" height="16" width="295" x="32" y="24">
                    </rect>
                    <polygon fill="#dadada" fill-rule="evenodd" points="109.91 262.6 167.91 290 258.78 206.71 345.45 255.5 508 173.5 508 346 44 346 109.91 262.6">
                    </polygon>
                </clipPath>
                <linearGradient id="i1qdqs938vcz-animated-diff">
                    <stop offset="0%" stop-color="#dadada" stop-opacity="1">
                        <animate attributeName="offset" dur="1.2s" keyTimes="0; 0.5; 1" repeatCount="indefinite" values="-1; -1; 1">
                        </animate>
                    </stop>
                    <stop offset="50%" stop-color="#bfbfbf" stop-opacity="1">
                        <animate attributeName="offset" dur="1.2s" keyTimes="0; 0.5; 1" repeatCount="indefinite" values="-0.5; -0.5; 1.5">
                        </animate>
                    </stop>
                    <stop offset="100%" stop-color="#dadada" stop-opacity="1">
                        <animate attributeName="offset" dur="1.2s" keyTimes="0; 0.5; 1" repeatCount="indefinite" values="0; 0; 2">
                        </animate>
                    </stop>
                </linearGradient>
            </defs>
        </svg>
	);
}
