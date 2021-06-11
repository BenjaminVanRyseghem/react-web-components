import babel from "@rollup/plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import sass from "rollup-plugin-sass";

export default {
	input: "src/index.js",
	output: {
		name: "react-counter",
		file: "dist/indexWithReact.js",
		format: "es"
	},
	plugins: [
		replace({
			preventAssignment: true,
			values: {
				"process.env.NODE_ENV": JSON.stringify("production")
			}
		}),
		resolve(),
		sass({
			output: true,
			insert: true
		}),
		babel({
			plugins: [
				"@babel/plugin-transform-runtime"
			],
			babelHelpers: "runtime",
			exclude: "node_modules/**",
			presets: ["@babel/env", "@babel/preset-react"]
		}),
		commonjs({
			namedExports: {
				"node_modules/react/index.js": ["useState", "useRef", "useEffect"]
			}
		})
	]
};
