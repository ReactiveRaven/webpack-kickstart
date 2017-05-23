var path = require('path')

module.exports = function (config) {
  config.set({
    browsers: [ 'PhantomJS' ],
    coverageReporter: {
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcovonly', subdir: '.' },
        { type: 'text-summary', subdir: '.', file: 'text-summary.txt' }
      ]
    },
    files: [
      'tests.webpack.js'
    ],
    frameworks: [
      'jasmine'
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'progress', 'coverage' ],
    webpack: {
      cache: true,
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /-test\.js$/,
            include: /src/,
            exclude: /(bower_components|node_modules)/,
            loader: 'babel-loader',
            enforce: 'pre',
            query: {
              cacheDirectory: '/tmp'
            }
          },
          {
            test: /\.js?$/,
            include: /src/,
            exclude: /(node_modules|bower_components|__tests__|-test\.)/,
            loader: 'babel-istanbul-loader',
            enforce: 'pre',
            query: {
              cacheDirectory: '/tmp'
            }
          },
          {
            test: /\.(css|less|sass)$/,
            loader: 'null-loader'
          },
          {
            test: /\.js$/,
            include: path.resolve(__dirname, '../src'),
            exclude: /(bower_components|node_modules|__tests__)/,
            loader: 'babel-loader',
            query: {
              cacheDirectory: '/tmp'
            }
          }
        ]
      }
    },
    webpackMiddleware: {
      noInfo: true
    }
  })
}
