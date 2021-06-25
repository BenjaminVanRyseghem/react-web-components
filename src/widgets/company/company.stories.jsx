import { action } from "@storybook/addon-actions";
import Company from "./company";
import React from "react";

export default {
	component: Company,
	title: "Widgets/Company"
};

Company.triggerExpandView = action("triggerExpandView");
export const shows = () => <Company/>;
