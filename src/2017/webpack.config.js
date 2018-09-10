const webpack = require('webpack');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: `${__dirname}/../../htdocs/assets/js/`,
    filename: 'app.js'
  }
};
