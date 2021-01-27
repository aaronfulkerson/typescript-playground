import { join, resolve } from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import * as webpack from "webpack";

const config: webpack.Configuration = {
  entry: {
    index: "./src/index.ts",
  },
  devServer: {
    compress: true,
    contentBase: join(__dirname, "public"),
    hot: true,
    port: 9000,
  },
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        exclude: "/node_modules",
        test: /\.ts?$/,
        use: "ts-loader",
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: "public/index.html",
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
};

export default config;
