module.exports = function(config) {
    config.set({
        frameworks: ['mocha', 'sinon-chai', 'source-map-support'],
        browsers: ['PhantomJS'],
        files: [
            'test/**/*.test.js'
        ],
        exclude: [
            'test/**/*.spec.js'
        ],
        preprocessors: {
            'test/**/*.test.js': ['webpack', 'sourcemap']
        },
        webpack: {
            devtool: 'inline-source-map'
        },
        webpackMiddleware: {
            noInfo: true
        },
        plugins: [
            require('karma-webpack')
        ],
        reporters: ['mocha'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        singleRun: false
    });
};
