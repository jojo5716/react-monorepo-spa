const helpers = require('./helpers/files');

const componentName = process.env.NAME;
const webpackFileName = 'webpack.prod.js';
const pathFolder = helpers.getParentFolder(componentName, webpackFileName);

if (pathFolder) {
    console.log(`Running test: ${componentName} (${pathFolder})`);
    const options = [`${pathFolder}/${componentName}/test/**/*.test.js --watch`];

    helpers.executeCommand('jest', options);
} else {
    console.log(`${componentName} not found and we can not run any test`);
}
