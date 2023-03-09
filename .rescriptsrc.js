const { name } = require("./package");
const path = require('path')

module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = "umd";
    config.output.globalObject = "window";
    config.output.path = path.join(__dirname,'dist')
    return config;
  },

  devServer: (_) => {
    const config = _;

    config.headers = {
      "Access-Control-Allow-Origin": "*",
    };
    config.historyApiFallback = true;
    config.static.watch = false;
    config.liveReload = false;

    return config;
  },
};