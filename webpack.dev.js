const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = ({ componentName, componentPath, before, alias }) => {
    const examplePath = `${componentPath}/example`;
    const exampleDistPath = `${examplePath}/__dist__`;
    const ENTRY_POINTS = {
        index: examplePath,
    };
    // Output config
    const OUTPUT_CONFIG = {
        chunkFilename: 'chunk-[name].[contenthash].js',
        // A filename pattern for the output files
        filename: '[name].js',
        // An absolute path to the desired output directory.
        library: componentName,
        libraryTarget: 'umd',
        path: exampleDistPath,
        publicPath: '/__dist__/',
    };

    return merge(common(), {
        devServer: {
            before,
            contentBase: examplePath,
            historyApiFallback: true,  // To response for any path in the url
            port: 9000,
        },
        entry: ENTRY_POINTS,
        mode: 'development',
        output: OUTPUT_CONFIG,
        plugins: [
            new DashboardPlugin(),
            new webpack.DefinePlugin({
                'process.env.DEVICE': JSON.stringify(process.env.DEVICE || 'desktop'),
            }),
        ],
        resolve: {
            alias: {
                ...alias,
            },
        },
    });
};
