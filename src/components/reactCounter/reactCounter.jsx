import React, { useState } from "react";
import registerComponent from "helpers/registerComponent";

// const wkCssFundamentalsPath = "https://cdn.wolterskluwer.io/wk/fundamentals/1.x.x/all.min.css";

/* eslint-disable-next-line no-process-env */
const wkCssFundamentalsPath = `${process.env.PUBLIC_URL}/all.min.css`;

export default function ReactCounter() {
	let [value, setValue] = useState(0);

	return (
		<>
		  <link href={wkCssFundamentalsPath} rel="stylesheet"/>
		  <h2>React counter</h2>
		  <button className="wk-button" onClick={() => setValue(value - 1)}>Increase</button>
		  <h1>{value}</h1>
		  <button className="wk-button" onClick={() => setValue(value + 1)}>Decrease</button>
		</>
	);
}

ReactCounter.nodeName = "react-counter";

registerComponent(ReactCounter);
