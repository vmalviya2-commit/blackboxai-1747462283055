import * as vscode from 'vscode';

// This method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    const output = vscode.window.createOutputChannel("Cicsia Zowe Extension");
    output.appendLine('Cicsia VSCode Extension for Zowe is now active!');

    // Debug information
    output.appendLine(`Extension Path: ${context.extensionPath}`);
    output.appendLine(`Workspace Path: ${vscode.workspace.workspaceFolders?.[0]?.uri.fsPath || 'No workspace'}`);

    // Register a command that shows a welcome message
    let helloCommand = vscode.commands.registerCommand('cicsia-vscode-extension-for-zowe.helloWorld', () => {
        try {
            vscode.window.showInformationMessage('Hello from Cicsia VSCode Extension for Zowe!');
            output.appendLine('Hello World command executed successfully');
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            output.appendLine(`Error executing Hello World command: ${errorMessage}`);
            vscode.window.showErrorMessage(`Failed to execute command: ${errorMessage}`);
        }
    });

    // Add command to subscription
    context.subscriptions.push(helloCommand);

    // Register a command to show extension information
    let showInfoCommand = vscode.commands.registerCommand('cicsia-vscode-extension-for-zowe.showInfo', () => {
        try {
            const message = [
                'Extension Information:',
                `- Version: ${vscode.extensions.getExtension('cicsia.cicsia-vscode-extension-for-zowe')?.packageJSON.version}`,
                `- VS Code Version: ${vscode.version}`,
                `- Workspace: ${vscode.workspace.workspaceFolders?.[0]?.uri.fsPath || 'No workspace'}`
            ].join('\n');

            output.appendLine(message);
            vscode.window.showInformationMessage(message);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            output.appendLine(`Error showing extension info: ${errorMessage}`);
            vscode.window.showErrorMessage(`Failed to show extension info: ${errorMessage}`);
        }
    });

    context.subscriptions.push(showInfoCommand);

    // Debug event listeners
    context.subscriptions.push(
        vscode.workspace.onDidChangeConfiguration(e => {
            if (e.affectsConfiguration('cicsia-vscode-extension-for-zowe')) {
                output.appendLine('Extension configuration changed');
            }
        })
    );

    // Show activation message
    vscode.window.showInformationMessage('Cicsia VSCode Extension for Zowe is now active!');
}

// This method is called when your extension is deactivated
export function deactivate() {
    console.log('Cicsia VSCode Extension for Zowe is now deactivated');
}
