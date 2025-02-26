import * as fs from 'fs';
import * as path from 'path';
import { JavaToTypescriptConverter, IConverterConfiguration } from '../src/conversion/JavaToTypeScript';

describe('Java to TypeScript conversion', () => {
  const fixturesDir = path.join(__dirname, 'fixtures');
  
  test('converts simple class correctly', async () => {
    // Setup paths
    const inputFile = path.join(fixturesDir, 'SimpleClass.java');
    const expectedOutputFile = path.join(fixturesDir, 'SimpleClass.ts');
    const actualOutputPath = path.join(__dirname, 'temp');
    const actualOutputFile = path.join(actualOutputPath, 'SimpleClass.ts');
    
    // Ensure output directory exists
    if (!fs.existsSync(actualOutputPath)) {
      fs.mkdirSync(actualOutputPath, { recursive: true });
    }
    
    // Configure converter
    const config: IConverterConfiguration = {
      packageRoot: fixturesDir,
      outputPath: actualOutputPath,
      files: [inputFile]
    };
    
    // Run conversion
    const converter = new JavaToTypescriptConverter(config);
    await converter.convert();
    
    // Read expected and actual output
    const expectedOutput = fs.readFileSync(expectedOutputFile, 'utf8').trim();
    const actualOutput = fs.readFileSync(actualOutputFile, 'utf8').trim();
    
    // Compare
    expect(actualOutput).toBe(expectedOutput);
  });
});
