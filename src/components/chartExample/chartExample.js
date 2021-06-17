import moment from "moment";
import React from "react";
import { Bar, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from "recharts";
import registerComponent from "../../helpers/registerComponent";

const data = [
	{
		"period": new Date(2020, 0, 1),
		"uv": 4000,
		"pv": 2400,
		"amt": 2400
	},
	{
		"period": new Date(2020, 0, 14),
		"uv": 3000,
		"pv": 1398,
		"amt": 2210
	},
	{
		"period": new Date(2020, 0, 15),
		"uv": 2000,
		"pv": 9800,
		"amt": 2290
	},
	{
		"period": new Date(2020, 0, 22),
		"uv": 2780,
		"pv": 3908,
		"amt": 2000
	},
	{
		"period": new Date(2020, 0, 29),
		"uv": 1890,
		"pv": 4800,
		"amt": 2181
	},
	{
		"period": new Date(2020, 1, 5),
		"uv": 2390,
		"pv": 3800,
		"amt": 2500
	},
	{
		"period": new Date(2020, 1, 12),
		"uv": 3490,
		"pv": 4300,
		"amt": 2100
	}
]

export default class ChartExample extends React.Component {
	static nodeName = "chart-example";
	static defaultProps = {};

	static propTypes = {};

	state = {};

	getTicks(first, last) {
		let result = [];
		let current = new Date(new Date(first).setHours(first.getHours() + 12));

		while (current < last) {
			result.push(current);
			current = new Date(new Date(current).setDate(current.getDate() + 1));
		}

		return result;
	}

	renderXAxis() {
		let first = data[0].period;
		let last = data[data.length - 1].period;

		let ticks = this.getTicks(first, last);
		return (
			<XAxis
				ticks={ticks}
				tickCount={ticks.length}
				padding={{ left: 20, right: 20 }}
				dataKey="period"
				scale="time"
				minTickGap={0}
				tickFormatter={(date) => {
					if (date.getDate() === 1) {
						return moment(date).format("DD/MM/YY");

					}
					return "";
				}}
				domain={[
					first,
					last
				]}/>
		);
	}

	renderTooltip() {
		return (
			<Tooltip
				cursor={false}
				labelFormatter={(period) => moment(period).format("LL")}
			/>
		);
	}

	render() {
		return (
			<div className="chartExample">
				<ComposedChart width={730} height={250} data={data}>
					{this.renderXAxis()}
					<YAxis/>
					{this.renderTooltip()}
					<Legend/>
					<Bar dataKey="pv" barSize={20} fill="#413ea0" isAnimationActive/>
					<Line type="linear" dataKey="uv" stroke="#ff7300"/>
				</ComposedChart>
			</div>
		);
	}
}

registerComponent(ChartExample);
