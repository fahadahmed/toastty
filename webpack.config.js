const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public')
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
        { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Toastty | Time Tracking Software | Melbourne, Australia',
        template: './src/index.html',
        minify: {
          collapseWhitespace: true
        }
      })
    ]
  }
];
