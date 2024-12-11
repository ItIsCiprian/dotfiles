const vscode = require('vscode');
const { telemetry, eventTypes } = require('./tlm');

function install_agent_extension_if_not_installed(context){
    try {
        const extensionId = 'Blackboxapp.blackboxagent';
    
        console.log(`Checking for extension ${extensionId} installation...`);
        const extension = vscode.extensions.getExtension(extensionId);
        if (extension) {
            console.log(`Extension ${extensionId} is installed.`);
            // console.log(`Extension ${extensionId} version: ${extension.isActive ? extension.active : extension.packageJSON.version}`);
            // You can perform actions if the extension is installed
        } else {
            console.log(`Extension ${extensionId} is not installed.`);
            console.log(`Installing extension ${extensionId}...`);
            vscode.commands.executeCommand('workbench.extensions.installExtension', extensionId);
            telemetry(eventTypes.other, '', {tag: 'installing-blackbox-agent'})
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    install_agent_extension_if_not_installed
}