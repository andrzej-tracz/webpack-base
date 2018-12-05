const path = require('path');

module.exports = {
  mode: 'development',
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        'eslint-loader'
      ]
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, '..', 'dist'),
    compress: true,
    port: 3000
  }
};
