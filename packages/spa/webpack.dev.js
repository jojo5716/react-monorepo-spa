const webpackDev = require('../../webpack.dev');
const path = require('path');

const ajax_mocks = require('./mocks/devserver/');

const componentName = 'SPA';
const componentPath = __dirname;

module.exports = webpackDev({
    componentName,
    componentPath,
    before: ajax_mocks,
    alias: {
        '@mocks': path.resolve(__dirname, 'mocks/'),
        '@src': path.resolve(__dirname, 'src/'),
        '@constants': path.resolve(__dirname, 'src/constants/'),
        '@core': path.resolve(__dirname, 'src/core/'),
    }
});
