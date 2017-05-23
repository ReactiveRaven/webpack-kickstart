var path = require('path')

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, '/public/js/'),
    publicPath: '/js/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.(es6|js)$/,
        exclude: /(node_modules)/,
        loaders: [ 'babel-loader', 'eslint-loader' ]
      }
    ]
  }
}
