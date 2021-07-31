const helpers = require('./helpers/files');

const componentName = process.env.NAME;
const webpackFileName = 'webpack.prod.js';
const pathFolder = helpers.getParentFolder(componentName, webpackFileName);

if (pathFolder) {
    console.log(`Linking ${componentName} (${pathFolder})`);
    const options = ['--config', `${pathFolder}/${componentName}/webpack.prod.js`];
    helpers.executeCommand('webpack', options);
} else {
    console.log(`${componentName} not found and we can not transpile it`);
}
