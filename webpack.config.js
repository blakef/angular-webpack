'use strict';

const webpack = require('webpack');
const StatsPlugin = require('stats-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const LodashPlugin = require('lodash-webpack-plugin');

const node_modules = [
    'node_modules/angular/angular.js',
    'node_modules/d3/d3.js'
].map(m => ({ from: m, to: 'lib/' }));

const static_data = [
    'src/index.html'
].map(m => ({from: m}));

module.exports = {
    entry: {
        all   : './src/index.js'
    },
    externals: {
        'd3': true,
        'angular': true
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].min.js',
        libraryTarget: 'umd',
        library: 'minmax'
    },
    devServer: {
        outputPath: __dirname + '/dist'
    },
    plugins: [
        new LodashPlugin({
            collections: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
        new StatsPlugin('stats.json', {
            chunkModules: true,
            exclude: [/node_modules/]
        }),
        new CopyWebpackPlugin(static_data.concat(node_modules))
    ],
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['ng-annotate', 'babel?presets[]=es2015&plugins[]=add-module-exports,plugins[]=lodash'], exclude: /node_modules/},
            { test: /\.scss$/, loader: 'style!css!sass', exclude: /node_modules/ },
            { test: /\.html$/, loader: 'raw', exclude: [/node_modules/, './src/index.html'] }
        ]
    }
};
