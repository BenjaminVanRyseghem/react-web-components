import ProfitAndLoss from "./profitAndLoss";
import React from "react";

export default {
	component: ProfitAndLoss,
	title: "Widgets/ProfitAndLoss"
};

export const shows = () => <ProfitAndLoss/>;
export const showsWithLegendWhileExpanded = () => <div className="expanded"><ProfitAndLoss/></div>;
export const showsWithLegend = () => <div className="wk-col-10"><ProfitAndLoss/></div>;
