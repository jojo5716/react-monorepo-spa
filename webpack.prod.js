const path = require('path');
const webpack = require('webpack');
const packageJSON = require('./package.json');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const reactExternal = {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react'
};

const reactDOMExternal = {
    root: 'ReactDOM',
    commonjs2: 'react-dom',
    commonjs: 'react-dom',
    amd: 'react-dom'
};

module.exports = ({ componentName, componentPath, alias, externals = {} }) => {
    const ENTRY_POINTS = {
        index: path.resolve(componentPath, 'src/index-with-styles.js'),
    };
    const OUTPUT_CONFIG = {
        // A filename pattern for the output files
        filename: '[name].js',
        // IMPORTANT!: This is the name of the global variable exported in browsers
        // Change it for the name you want your component to have as window.NAME
        library: componentName,
        libraryTarget: 'umd',
        // An absolute path to the desired output directory.
        path: path.resolve(componentPath, 'dist/'),
    };

    return merge(common(), {
        entry: ENTRY_POINTS,
        externals: {
            ...externals,
            'react': reactExternal,
            'react-dom': reactDOMExternal,
        },
        mode: 'production',
        output: OUTPUT_CONFIG,
        plugins: [
            new webpack.DefinePlugin({
                // removes a lot of debugging code in React
                'process.env': {
                    BROWSER: true,
                    VERSION: JSON.stringify(packageJSON.version)
                }
            }),
        ],
        resolve: {
            alias,
        },
    });
}
