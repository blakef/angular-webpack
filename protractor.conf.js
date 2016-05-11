exports.config = {
    directConnect: true,
    chromeDriver: './node_modules/protractor/selenium/chromedriver',
    capabilities: {
        browserName: 'chrome'
    },
    baseUrl: 'http://localhost:3333/pages/',

    specs: [
        'test/e2e/**/*.spec.js'
    ],

    onPrepare: function() {

        require('babel-core/register')({
            presets: ['es2015']
        });
        require('babel-polyfill');

        const Jasmine2Reporter = require('jasmine2-reporter').Jasmine2Reporter;
        const options = {
            pendingSpec: false,
            symbols: {
                pending: '*  '.strikethrough
            }
        };
        jasmine.getEnv().addReporter(new Jasmine2Reporter(options));
    },
    onCleanUp: function() {
    },

    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColours: true,
        defaultTimeoutInterval: 60 * 1000,
        stopSpecOnExpectationFailure: true
    },

    // Keep these high to avoid false positives
    allScriptsTimeout: 60 * 1000,
    getPageTimeout: 10000,
    untrackOutstandingTimeouts: false
};
