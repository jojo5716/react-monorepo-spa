const helpers = require('./helpers/files');

const componentName = process.env.NAME;
const webpackFileName = 'webpack.dev.js';
const pathFolder = helpers.getParentFolder(componentName, webpackFileName);

if (pathFolder) {
    console.log(`Running ${componentName} (${pathFolder})`);
    const isSPA = componentName === 'spa';
    const openConfig = isSPA ? '' : '--open';
    const command = `webpack serve --config ${pathFolder}/${componentName}/${webpackFileName} ${openConfig}`; // eslint-disable-line

    helpers.executeSyncCommand(command);
} else {
    console.log(`${componentName} not found and we can not start it`);
}
