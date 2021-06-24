const path = require("path");

module.exports = async ({ config }) => {
	config.resolve.modules = [
		path.resolve(process.cwd(), "src"),
		"node_modules"
	];

	config.plugins = config.plugins.filter((p) => String(p.resourceRegExp) !== "/core-js/");

	config.watchOptions = {
		/*
		 * Ignore files whose name starts with '.#' because they are
		 * temporary lock files:
		 */
		ignored: [new RegExp("/\\.#")]
	};

	return config;
};
