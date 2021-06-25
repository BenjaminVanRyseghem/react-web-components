import KeyFigure from "./keyFigure";
import kpiData from "./kpi.json";
import React from "react";

export default {
	component: KeyFigure,
	title: "Components/KeyFigure"
};

export const shows = () => <div>
	<KeyFigure kpi={kpiData}/>
</div>;
