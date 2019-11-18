const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: {
    bundle1: "./index.js"
  },
  output: {
    filename: "index.js"
  },
  resolve: {
    extensions: ["*", ".js", ".vue", ".json"]
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.vue$/, use: ["vue-loader"] },
      { test: /\.css$/, use: ["vue-style-loader", "css-loader"] }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
