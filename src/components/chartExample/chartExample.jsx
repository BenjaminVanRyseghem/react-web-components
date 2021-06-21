import { Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import moment from "moment";
import React from "react";
import registerComponent from "helpers/registerComponent";

const data = [
	{
		period: new Date(2020, 0, 1),
		uv: 4000,
		pv: 2400,
		amt: 2400
	},
	{
		period: new Date(2020, 1, 1),
		uv: 2390,
		pv: 3800,
		amt: 2500
	},
	{
		period: new Date(2020, 2, 1),
		uv: 2390,
		pv: 2390,
		amt: 2500
	},
	{
		period: new Date(2020, 3, 1),
		uv: 2390,
		pv: 3800,
		amt: 2500
	}
];

export default class ChartExample extends React.Component {
	static nodeName = "chart-example";

	static defaultProps = {};

	static propTypes = {};

	state = {};

	/**
	 * Compute all ticks for the XAxis between `first` and `last`.
	 *
	 * @param {Date} first - First date of the data set.
	 * @param {Date} last - Last date of the data set.
	 * @return {Date[]} Ticks to display.
	 */
	getTicks(first, last) {
		let result = [];
		let current = first;

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
				dataKey="period"
				// domain={[first, last]}
				// minTickGap={0}
				padding={{
					left: 20,
					right: 20
				}}
				// scale="time"
				// tickCount={ticks.length}
				tickFormatter={(date) => moment(date).format("MMM")}
				tickSize={0}
				// ticks={ticks}
			/>
		);
	}

	renderTooltip() {
		return (
			<Tooltip
				cursor={{ fill: "#F00" }}
				labelFormatter={(period) => moment(period).format("LL")}
			/>
		);
	}

	render() {
		return (
			<div className="chartExample" style={{ height: "1000px" }}>
				<ResponsiveContainer height="100%" width="100%">
					<ComposedChart data={data} height={250} width={730}>
						<CartesianGrid/>
						{this.renderXAxis()}
						<YAxis/>
						{this.renderTooltip()}
						<Legend/>
						<Bar
							isAnimationActive
							// barSize={20}
							dataKey="pv"
							fill="#413ea0"
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5
							}}
						/>
						<Line dataKey="uv"/>
					</ComposedChart>
				</ResponsiveContainer>
			</div>
		);
	}
}

registerComponent(ChartExample);
