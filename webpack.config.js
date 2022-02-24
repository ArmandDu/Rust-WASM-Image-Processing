const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WasmWebpackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
  entry: "./web/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./web/index.html",
    }),
    new WasmWebpackPlugin({
      crateDirectory: path.resolve(__dirname, "./image-effects"),
    }),
  ],
  experiments: {
    asyncWebAssembly: true,
  },
};
