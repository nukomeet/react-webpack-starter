var webpack = require('webpack');

module.exports = {
  entry: {
    app: './main.js',
    vendors: ['react', 'react-dom']
  },
  output: {
    filename: '[name].js',
    path: './dist',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel'}
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
};