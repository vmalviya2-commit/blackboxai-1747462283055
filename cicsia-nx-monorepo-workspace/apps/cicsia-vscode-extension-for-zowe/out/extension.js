"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
// This method is called when your extension is activated
function activate(context) {
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
        }
        catch (error) {
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
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            output.appendLine(`Error showing extension info: ${errorMessage}`);
            vscode.window.showErrorMessage(`Failed to show extension info: ${errorMessage}`);
        }
    });
    context.subscriptions.push(showInfoCommand);
    // Debug event listeners
    context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(e => {
        if (e.affectsConfiguration('cicsia-vscode-extension-for-zowe')) {
            output.appendLine('Extension configuration changed');
        }
    }));
    // Show activation message
    vscode.window.showInformationMessage('Cicsia VSCode Extension for Zowe is now active!');
}
// This method is called when your extension is deactivated
function deactivate() {
    console.log('Cicsia VSCode Extension for Zowe is now deactivated');
}
//# sourceMappingURL=extension.js.map