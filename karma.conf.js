/* eslint-disable no-var */

var webpack = require('webpack')

module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],

    files: [
      'lib/**/__tests__/*.js'
    ],

    preprocessors: {
      'lib/**/__tests__/*.js': ['webpack']
    },

    reporters: ['progress', 'coverage'],

    browsers: ['Chrome'],

    singleRun: true,

    coverageReporter: {
      type: 'lcov',
      subdir: '.'
    },

    webpack: {
      module: {
        loaders: [
          {test: /\.js$/, exclude: /\/node_modules\//, loaders: ['babel']},
          {test: /\.js$/, exclude: [/\/node_modules\//, /\/__tests__\//], loaders: ['isparta']}
        ]
      },

      plugins: [
        new webpack.ProvidePlugin({
          chai: 'chai',
          assert: 'chai.assert'
        })
      ]
    },

    webpackMiddleware: {
      quiet: true
    }
  })
}
