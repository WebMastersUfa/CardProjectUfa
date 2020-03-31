const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const merge = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    contentBase: './dist',
    watchContentBase: true,
    inline: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 8000,
    disableHostCheck: true,
    stats: {
      colors: true,
      modules: false,
      chunks: false,
      chunkGroups: false,
      chunkModules: false,
      env: true,
    },
  },
  plugins: [new OpenBrowserPlugin({ url: 'http://localhost:8000' })],
});