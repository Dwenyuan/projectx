// Karma configuration
// Generated on Thu Dec 15 2016 16:27:22 GMT+0800 (中国标准时间)
var webpackConf = require('./webpack.production.js')
var webpack = require('webpack')
delete webpackConf.entry
module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'build/bootstrap/js/jquery.min.js',
            'build/bootstrap/js/bootstrap.min.js',
            'build/echarts.bundle.js',
            // 'build/bundle.js',
            { pattern: 'test/*-test.js', watched: false },
            { pattern: 'test/**/*-test.js', watched: false }
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'test/*.js': ['coverage','sourcemap'],
            'test/report-test.js': ['webpack']
                // 'test/**/*-test.js': ['webpack']
        },

        webpack: {
            devtool: '#source-map',
            module: {
                loaders: [
                    { test: /\.vue$/, loader: 'vue' },
                    { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
                    { test: /\.swf$/, loader: 'url?name=[name].[ext]' },
                    { test: /\.html$/, loader: 'html' },
                    { test: /\.(png|jpg)$/, loader: 'url?limit=10000' },
                    { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
                    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
                    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
                    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
                    { test: /\.css$/, loader: 'style-loader!css-loader' }
                ]
            },
            plugins: [
                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify('test')
                })
            ],
            babel: {
                presets: ['es2015'],
                plugins: ["transform-runtime", "transform-object-rest-spread"]
            },
            resolve: {
                alias: {
                    'vue$': 'vue/dist/vue.js'
                }
            }
        },
        //{
        // karma watches the test entry points
        // (you don't need to specify the entry option)
        // webpack watches dependencies

        // webpack configuration
        //}
        // ,

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            stats: 'errors-only'
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress','coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

    })
}
