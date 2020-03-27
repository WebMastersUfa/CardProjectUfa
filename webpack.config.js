const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(
      { filename: 'style.css' }
    ),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/pages/contacts.html',
      filename: './pages/contacts.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/pages/personalization.html',
      filename: './pages/personalization.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/pages/portfolio.html',
      filename: './pages/portfolio.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/pages/requirements.html',
      filename: './pages/requirements.html'
    })
  ]
};