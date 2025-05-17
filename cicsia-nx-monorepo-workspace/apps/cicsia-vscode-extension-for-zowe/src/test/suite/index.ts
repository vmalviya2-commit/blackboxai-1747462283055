import * as path from 'path';
import Mocha = require('mocha');
import { glob } from 'glob';

export async function run(): Promise<void> {
    // Create the mocha test
    const mocha = new Mocha({
        ui: 'tdd',
        color: true,
        timeout: 10000  // Increased timeout for slower machines
    });

    const testsRoot = path.resolve(__dirname, '..');

    try {
        // Find all test files
        const files = await glob('**/**.test.js', { cwd: testsRoot });

        // Add files to the test suite
        for (const f of files) {
            mocha.addFile(path.resolve(testsRoot, f));
        }

        // Run the mocha test
        return new Promise<void>((resolve, reject) => {
            try {
                mocha.run((failures: number) => {
                    if (failures > 0) {
                        reject(new Error(`${failures} tests failed.`));
                    } else {
                        resolve();
                    }
                });
            } catch (err) {
                reject(err);
            }
        });
    } catch (err) {
        console.error('Error loading test files:', err);
        throw err;
    }
}
