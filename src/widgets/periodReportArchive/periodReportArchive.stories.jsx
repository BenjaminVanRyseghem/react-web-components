import { action } from "@storybook/addon-actions";
import PeriodReportArchive from "./periodReportArchive";
import React from "react";

export default {
	component: PeriodReportArchive,
	title: "Widgets/PeriodReportArchive"
};

PeriodReportArchive.triggerExpandView = action("triggerExpandView");

export const shows = () => <PeriodReportArchive/>;
