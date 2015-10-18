import path from "path";
import webpack from "webpack";

export const Config = {
  entry: {
    comment: path.join(__dirname, "src", "js", "comment.js")
  },
  output: {
    filename: "[name].js"
  },
  resolve: {
    modulesDirectories: ["node_modules"],
    extensions: ["", ".js"]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  progress: true
};
