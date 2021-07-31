const helpers = require('./helpers/files');

const componentName = process.env.NAME;
const webpackFileName = 'webpack.dev.js';
const successfullyMessage = 'The component has been linked successfully';

if (componentName) {
    const pathFolder = helpers.getParentFolder(componentName, webpackFileName);

    if (pathFolder) {
        console.log(`Linking ${componentName} (${pathFolder})`);
        const command = `cd ./${pathFolder}/${componentName} && npm run dist && npm link`;

        helpers.executeCommandWithoutOutput(command, successfullyMessage);
    } else {
        console.log(`${componentName} not found and we can not start it`);
    }
}
