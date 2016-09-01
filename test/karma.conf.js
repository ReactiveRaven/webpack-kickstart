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
        preLoaders: [
          {
            test: /-test\.js$/,
            include: /src/,
            exclude: /(bower_components|node_modules)/,
            loader: 'babel',
            query: {
              cacheDirectory: '/tmp'
            }
          },
          {
            test: /\.js?$/,
            include: /src/,
            exclude: /(node_modules|bower_components|__tests__|-test\.)/,
            loader: 'babel-istanbul-loader',
            query: {
              cacheDirectory: '/tmp'
            }
          }
        ],
        loaders: [
          {
            test: /\.(css|less|sass)$/,
            loader: 'null-loader'
          },
          {
            test: /\.js$/,
            include: path.resolve(__dirname, '../src'),
            exclude: /(bower_components|node_modules|__tests__)/,
            loader: 'babel',
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
