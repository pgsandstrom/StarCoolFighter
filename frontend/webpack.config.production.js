const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['whatwg-fetch', 'babel-polyfill', './src'],
  output: { path: path.join(__dirname, '/assets/'), filename: 'bundle_prod.js' },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      { test: /\.woff$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'file-loader' },
      { test: /\.eot$/, loader: 'file-loader' },
      { test: /\.svg$/, loader: 'file-loader' },
      { test: /\.png$/, loader: 'url-loader?mimetype=image/png' },
    ],
  },
  plugins: [
    // Make react understand we are in production mode
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    // this makes webpacks -p flag redundant. Optimizes and minimizes
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
      },
    }),
  ],
  // This could in theory decrease size, but currently does not work:
  // devtool: 'source-map'
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
