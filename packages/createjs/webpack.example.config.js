const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ConcatPlugin = require("@mcler/webpack-concat-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const concatPluginConfigGenerator = (name, files) => {
  return {
    name: name,
    fileName: "[name].js",
    filesToConcat: files,
    injectType: "none",
    attributes: {
      async: false
    }
  };
};

module.exports = (options) => {
  return {
    mode: "development",

    entry: {
      main: path.resolve("example/index.ts")
    },

    output: {
      path: __dirname + "/dist",
      filename: "game.[hash].js"
    },

    devtool: "source-map",

    module: {
      rules: [{ test: /\.ts$/, loader: "ts-loader" }]
    },

    plugins: [
      new webpack.ProgressPlugin(),

      new CleanWebpackPlugin(),

      new HtmlWebpackPlugin({
        template: path.resolve("./static/index-template.html"),
        filename: "index.html",
        inject: false
      }),

      new ConcatPlugin(
        concatPluginConfigGenerator("createjs", [
          path.resolve(__dirname, "./node_modules/easeljs/lib/easeljs.js")
        ])
      ),

      new CopyPlugin({ patterns: [{ from: path.resolve("./static"), to: "." }] })
    ],

    resolve: {
      extensions: [".ts", ".js", ".json"]
    },

    devServer: {
      host: "0.0.0.0",
      contentBase: path.join(__dirname, "static"),
      hot: true,
      disableHostCheck: true,
      inline: false
    }
  };
};
