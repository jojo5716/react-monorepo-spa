const webpackDev = require('../../webpack.dev');

const componentName = 'ContentPage';
const componentPath = __dirname;

module.exports = webpackDev({
    componentName,
    componentPath,
})
