# Cicsia VSCode Extension for Zowe

This VS Code extension provides integration with Zowe, making it easier to work with mainframe applications and data.

## Features

- Basic extension setup with Webpack bundling
- Integration with Nx monorepo structure
- Command registration example
- Debug support with source maps
- Test infrastructure

## Development

This extension is part of a Nx monorepo. To develop:

1. Build the extension:
```bash
nx build cicsia-vscode-extension-for-zowe
```

2. Watch for changes:
```bash
nx watch cicsia-vscode-extension-for-zowe
```

3. Package the extension:
```bash
nx package cicsia-vscode-extension-for-zowe
```

### Debugging

1. Open the extension in VS Code
2. Press F5 to start debugging
3. In the Extension Development Host window:
   - Run command "Zowe: Hello World" to test basic functionality
   - Run command "Zowe: Show Extension Information" to see extension details
   - Check the Output panel (View -> Output) and select "Cicsia Zowe Extension" for debug logs

### Running Tests

1. Open the Debug viewlet (`Ctrl+Shift+D` or `Cmd+Shift+D` on Mac)
2. Pick 'Extension Tests' from the drop-down menu
3. Press F5 to run the tests in a new window with your extension loaded
4. See the output of the test result in the Debug Console

### Test Coverage

The extension includes:
- Unit tests in `src/test/suite`
- Integration tests that can be run with the 'Extension Tests' launch configuration
- Webpack bundling for production builds
- ESLint configuration for code quality
- TypeScript configuration with strict type checking

### Available Commands

- `Zowe: Hello World`: Displays a hello world message
- `Zowe: Show Extension Information`: Shows information about the extension and environment

## Requirements

- VS Code 1.85.0 or higher
- Node.js and npm installed

## Extension Settings

This extension contributes the following settings:

* None at the moment

## Known Issues

* Initial development version

## Release Notes

### 0.0.1

Initial release of Cicsia VSCode Extension for Zowe
- Basic extension structure
- Hello World command
- Extension information command
- Debug support
- Test infrastructure
