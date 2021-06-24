import React, { useState } from "react";
import registerComponent from "helpers/registerComponent";
import style from "./reactCounter.css";
import withWKStyle from "hoc/withWKStyle";

debugger;
function ReactCounter() {
	let [value, setValue] = useState(0);

	return (
		<>
		  <h2>React counter</h2>
		  <button className="wk-button" onClick={() => setValue(value - 1)}>Decrease</button>
		  <h1>{value}</h1>
		  <button className="wk-button" onClick={() => setValue(value + 1)}>Increase</button>
		</>
	);
}

ReactCounter.nodeName = "react-counter";

export default registerComponent(withWKStyle(ReactCounter));
