module.exports = function (config) {
  config.set({
    // ... normal karma configuration
    files: [
      // all files ending in "_test"      
      { pattern: 'test/*_test.js', watched: false },
      { pattern: 'test/**/*_test.js', watched: false },
      { pattern: 'test/**/*_test.ts', watched: false },
      { pattern: 'test/**/*_test.ts', watched: false }
      // each file acts as entry point for the webpack configuration
    ],
    singleRun: true,
    basePath: '',
    frameworks: ['jasmine'],

    preprocessors: {
      // add webpack as preprocessor
      'test/*_test.js': ['webpack'],
      'test/**/*_test.js': ['webpack'],
      'test/*_test.ts': ['webpack'],
      'test/**/*_test.ts': ['webpack']
    },

    browsers: ['PhantomJS'],
    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    },

    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    plugins: [
      require('karma-phantomjs-launcher'),
      require('karma-webpack'),
      require('karma-jasmine')
    ],

    webpack: {
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies

      // webpack configuration      

      resolve: {
        extensions: ['.ts', '.js', '.tsx']
      },

      module: {
        rules: [
          {
            test: /\.ts$/, use: [{
              loader: 'ts-loader'
            }]
          }]
      }
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    }

  });
}