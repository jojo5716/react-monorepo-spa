const webpackProd = require('../../webpack.prod');
const path = require('path');

const componentName = 'SPA';
const componentPath = __dirname;

module.exports = webpackProd({
    componentName,
    componentPath,
    alias: {
        '@mocks': path.resolve(__dirname, 'mocks/'),
        '@src': path.resolve(__dirname, 'src/'),
        '@constants': path.resolve(__dirname, 'src/constants/'),
        '@core': path.resolve(__dirname, 'src/core/'),
    }
});
