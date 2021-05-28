module.exports = {
  devtool: "source-map",
  watch: true,
  entry: {
    filename: "./index.js",
  },
  output: {
    filename: "app.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
