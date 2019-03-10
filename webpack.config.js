const webpack = require('webpack');

module.exports = {
  entry: "./client/src/index.js",
  output: {
    path: __dirname + '/public/build/',
    publicPath: "build/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!autoprefixer-loader",
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!autoprefixer-loader!less",
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.gif$/,
        loader: "url-loader?limit=10000&mimetype=image/gif"
      },
      {
        test: /\.jpg$/,
        loader: "url-loader?limit=10000&mimetype=image/jpg"
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=10000&mimetype=image/png"
      },
      {
        test: /\.svg/,
        loader: "url-loader?limit=26000&mimetype=image/svg+xml"
      },
      {
        test: /\.jsx?$/,         // Match both .js and .jsx files
        exclude: /node_modules/,
        loader: "babel",
        query:
          {
            presets: ['react']
          }
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  }
};