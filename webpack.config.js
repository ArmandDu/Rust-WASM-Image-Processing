const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./web/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./web/index.html"
    })]
}