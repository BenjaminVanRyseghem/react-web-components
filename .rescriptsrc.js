const jestConfig = require("./jest.config");
const webpackConfig = require("./webpack.config");

module.exports = [
	["use-babel-config", ".babelrc"],
	{
		jest: (config) => {
			let result = Object.assign({}, config, jestConfig);
			result.transform["^.+\\.(js|jsx|ts|tsx)$"] = "babel-jest";
			result.moduleDirectories = webpackConfig.resolve.modules;
			return result;
		},
		webpack: (webpack) => {
			webpack.plugins = webpack.plugins.filter((plugin) => plugin.key !== "ESLintWebpackPlugin")
			webpack.resolve.modules = webpackConfig.resolve.modules;
			webpack.resolve.extensions = webpackConfig.resolve.extensions;
			webpack.optimization.minimize = false;
			webpack.optimization.splitChunks = webpackConfig.optimization.splitChunks;
			webpack.optimization.runtimeChunk = webpackConfig.optimization.runtimeChunk;
			webpack.output.filename = webpackConfig.output.filename;
			webpack.resolve.alias = Object.assign({}, webpack.resolve.alias, webpackConfig.resolve.alias);

			return webpack;
		}
	}
];
