import { action } from "@storybook/addon-actions";
import KeyFigure from "./keyFigure";
import React from "react";

export default {
	component: KeyFigure,
	title: "Widgets/KeyFigure"
};

KeyFigure.triggerExpandView = action("triggerExpandView");
export const shows = () => <KeyFigure/>;
