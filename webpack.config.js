const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
	mode: "development",
	devServer: {
		historyApiFallback: true,
		open: true,
		compress: true,
		hot: true,
		port: 8000,
	},
	entry: {
		main: path.resolve(__dirname, "./src/index.js"),
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "bundle.js",
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Artesanova",
			template: path.resolve(__dirname, "./src/index.html"),
			filename: "index.html",
		}),
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(waff(2)?|eot|ttf|otf|svg)$/,
				type: "asset/inline",
			},
			{
				test: /\.(scss|css)$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
};
