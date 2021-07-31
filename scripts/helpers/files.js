const fs = require('fs');
const childProcess = require('child_process');

module.exports = {
    existComponentInFolder,
    showOutput,
    executeCommand,
    executeCommandWithoutOutput,
    executeSyncCommand,
    getParentFolder,
};

function existComponentInFolder(componentName, folderPath, fileName) {
    return fs.existsSync(`${folderPath}/${componentName}/${fileName}`);
}

function showOutput(error, message) {
    console.log(error || message);
}

function executeCommand(command, options) {
    const commandProcess = childProcess.spawn(command, options);

    commandProcess.stdout.on('data', (data) => { console.info(data.toString()); });
    commandProcess.stderr.on('data', (data) => { console.error(data.toString()); });
}

function executeCommandWithoutOutput(command, message) {
    childProcess.exec(command, (error) => showOutput(error, message));
}

function executeSyncCommand(command) {
    childProcess.execSync(command, { stdio: 'inherit' });
}

function getParentFolder(componentName, fileToFind) {
    let pathFolder;

    if (existComponentInFolder(componentName, 'pages', fileToFind)) {
        pathFolder = 'pages';
    } else if (existComponentInFolder(componentName, 'packages', fileToFind)) {
        pathFolder = 'packages';
    }

    return pathFolder;
}
