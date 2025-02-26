/*
 * Copyright (c) Mike Lischke. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import * as fs from "fs/promises";
import * as path from "path";
import { expect, describe, afterAll, it, beforeAll } from "vitest";

import { JavaToTypescriptConverter } from "../../src/conversion/JavaToTypeScript.js";

describe("Fixtures Tests", () => {
  const testDir = path.join(process.cwd(), "tests");
  const fixturesDir = path.join(testDir, "conversion", "fixtures");
  const javaFixturesDir = path.join(fixturesDir, "java");
  const tsFixturesDir = path.join(fixturesDir, "ts");
  const targetDir = path.join(testDir, "conversion", "generated-fixtures");

  beforeAll(async () => {
    // Ensure the target directory exists
    try {
      await fs.mkdir(targetDir, { recursive: true });
    } catch (e) {
      // Ignore if directory already exists
    }
  });

  afterAll(async () => {
    await fs.rm(targetDir, { recursive: true, force: true });
  });

  it("Converts all fixture files correctly", async () => {
    // Get all Java files from the fixtures directory
    const javaFiles = await fs.readdir(javaFixturesDir);
    const javaFilePaths = javaFiles
      .filter(file => file.endsWith('.java'))
      .map(file => path.join(javaFixturesDir, file));

    // Configure converter
    const converter = new JavaToTypescriptConverter({
      packageRoot: javaFixturesDir,
      outputPath: targetDir,
      files: javaFilePaths,
      options: {
        preferArrowFunctions: true,
        convertAnnotations: false,
        autoAddBraces: true,
      },
    });

    // Run conversion
    await converter.startConversion();

    // Compare each generated TS file with its expected fixture
    for (const javaFile of javaFiles.filter(file => file.endsWith('.java'))) {
      const baseName = path.basename(javaFile, '.java');
      const generatedTsPath = path.join(targetDir, `${baseName}.ts`);
      const expectedTsPath = path.join(tsFixturesDir, `${baseName}.ts`);

      // Check if expected fixture exists
      try {
        await fs.access(expectedTsPath);
      } catch (e) {
        throw new Error(`Expected TypeScript fixture not found: ${expectedTsPath}`);
      }

      // Read and compare files
      const generatedContent = (await fs.readFile(generatedTsPath, 'utf8')).trim();
      const expectedContent = (await fs.readFile(expectedTsPath, 'utf8')).trim();

      expect(generatedContent).toBe(expectedContent);
    }
  });
});
