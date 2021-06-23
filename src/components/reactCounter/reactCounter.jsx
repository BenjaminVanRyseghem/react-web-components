import React, { useState } from "react";
import registerComponent from "helpers/registerComponent";

const wkCssFundamentalsPath = "https://files.petton.fr/cassou/temp/all.min.css";

export default function ReactCounter() {
	let [value, setValue] = useState(0);

	return (
		<>
		  <link href={wkCssFundamentalsPath} rel="stylesheet"/>
		  <h2>React counter</h2>
		  <button className="wk-button" onClick={() => setValue(value - 1)}>Decrease</button>
		  <h1>{value}</h1>
		  <button className="wk-button" onClick={() => setValue(value + 1)}>Increase</button>
		</>
	);
}

ReactCounter.nodeName = "react-counter";

registerComponent(ReactCounter);
