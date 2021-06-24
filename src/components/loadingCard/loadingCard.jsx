/* eslint-disable react/no-unknown-property */
import React from "react";

export default function loadingCard() {
	return (
<div className="wk-docs-example-loading-circular">
    <div className="wk-lazyloading-container wk-loading-light-overlay">
        <span className="wk-loading-circular-icon wk-icon-filled-spinner-alt wk-spin"></span>
        <div className="wk-loading-circular-label">Finding results...</div>
    </div>
</div>
	);
}
