/* eslint-disable filenames/match-regex,filenames/match-exported */
const defaultConf = require("./webpack.config");

defaultConf.externals.react = "React";
defaultConf.externals["react-dom"] = "ReactDOM";

module.exports = defaultConf;
