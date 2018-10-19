const webpack = require('webpack')


module.exports = {
  entry: ['@babel/polyfill', './src/js/app.js'],
  output: {
    path: `${__dirname}/../../htdocs/2018/assets/js/`,
    filename: 'app.js'
  },
  // plugins: usedPlugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
