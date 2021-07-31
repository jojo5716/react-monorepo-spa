const webpackProd = require('../../webpack.prod');

const componentName = 'ContentPage';
const componentPath = __dirname;

module.exports = webpackProd({
    componentName,
    componentPath,
})
