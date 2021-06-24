import { cells, columns, rows } from "./income-statment.json";
import CondensedReport from "./condensedReport";
import React from "react";

export default {
	component: CondensedReport,
	title: "Components/CondensedReport"
};

export const shows = () => <CondensedReport cells={cells} columns={columns} rows={rows}/>;
