const webpack = require('webpack');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: `${__dirname}/../../htdocs/2017/assets/js/`,
    filename: 'app.js'
  }
};
