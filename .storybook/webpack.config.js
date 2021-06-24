const path = require("path");

module.exports = async ({ config }) => {
	config.resolve.modules = [
		path.resolve(process.cwd(), "src"),
		"node_modules"
	];

	config.plugins = config.plugins.filter((p) => String(p.resourceRegExp) !== "/core-js/");

	config.module.rules[5].oneOf.forEach((each) => {
		if (each.test && each.test.toString().match("css")) {
			each.use = ["to-string-loader", "css-loader"];
		}
		if (each.test && each.test.toString().match("scss")) {
			each.use.push("sass-loader");
		}
	});

	config.watchOptions = {
		/*
		 * Ignore files whose name starts with '.#' because they are
		 * temporary lock files:
		 */
		ignored: [new RegExp("/\\.#")]
	};

	return config;
};
