/*
 * Copyright (c) Mike Lischke. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import * as fs from "fs/promises";
import * as path from "path";
import { expect, describe, afterAll, it, beforeAll } from "vitest";
import * as ts from "typescript";

import { JavaToTypescriptConverter } from "../../src/conversion/JavaToTypeScript.js";

/**
 * Compares two TypeScript ASTs for structural equivalence.
 * This ignores position information and other non-semantic differences.
 * @param sourceFile1
 * @param sourceFile2
 */
function compareAsts(
  sourceFile1: ts.SourceFile,
  sourceFile2: ts.SourceFile
): boolean {
  // Create a TypeScript program to resolve types and symbols
  const compilerOptions: ts.CompilerOptions = {
    target: ts.ScriptTarget.ES2020,
    module: ts.ModuleKind.ESNext,
  };

  const program = ts.createProgram(
    [sourceFile1.fileName, sourceFile2.fileName],
    compilerOptions
  );

  // Helper function to recursively compare nodes
  /**
   *
   * @param node1
   * @param node2
   */
  function areNodesEqual(node1: ts.Node, node2: ts.Node): boolean {
    // Check if node kinds are the same
    if (node1.kind !== node2.kind) {
      return false;
    }

    // Compare specific node properties based on kind
    switch (node1.kind) {
      case ts.SyntaxKind.Identifier:
        return (node1 as ts.Identifier).text === (node2 as ts.Identifier).text;

      case ts.SyntaxKind.StringLiteral:
      case ts.SyntaxKind.NumericLiteral:
        return (
          (node1 as ts.LiteralExpression).text ===
          (node2 as ts.LiteralExpression).text
        );

      case ts.SyntaxKind.PropertyDeclaration:
        const prop1 = node1 as ts.PropertyDeclaration;
        const prop2 = node2 as ts.PropertyDeclaration;

        return (
          areNodesEqual(prop1.name, prop2.name) &&
          (prop1.type && prop2.type
            ? areNodesEqual(prop1.type, prop2.type)
            : prop1.type === prop2.type)
        );

      // Add more specific comparisons for other node types as needed
    }

    // Compare children recursively
    const children1 = Array.from(node1.getChildren(sourceFile1));
    const children2 = Array.from(node2.getChildren(sourceFile2));

    if (children1.length !== children2.length) {
      return false;
    }

    return children1.every((child, index) => {
      return areNodesEqual(child, children2[index]);
    });
  }

  // Start comparison from the root
  return areNodesEqual(sourceFile1, sourceFile2);
}

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
      .filter((file) => {
        return file.endsWith(".java");
      })
      .map((file) => {
        return path.join(javaFixturesDir, file);
      });

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
    for (const javaFile of javaFiles.filter((file) => {
      return file.endsWith(".java");
    })) {
      const baseName = path.basename(javaFile, ".java");
      const generatedTsPath = path.join(targetDir, `${baseName}.ts`);
      const expectedTsPath = path.join(tsFixturesDir, `${baseName}.ts`);

      // Check if expected fixture exists
      try {
        await fs.access(expectedTsPath);
      } catch (e) {
        throw new Error(
          `Expected TypeScript fixture not found: ${expectedTsPath}`
        );
      }

      // Read files
      const generatedContent = (
        await fs.readFile(generatedTsPath, "utf8")
      ).trim();
      const expectedContent = (
        await fs.readFile(expectedTsPath, "utf8")
      ).trim();

      // Compare text content
      // expect(generatedContent).toBe(expectedContent);

      // Parse TypeScript files into ASTs
      const generatedSourceFile = ts.createSourceFile(
        generatedTsPath,
        generatedContent,
        ts.ScriptTarget.Latest,
        true
      );

      const expectedSourceFile = ts.createSourceFile(
        expectedTsPath,
        expectedContent,
        ts.ScriptTarget.Latest,
        true
      );

      // Compare ASTs
      const astsEqual = compareAsts(generatedSourceFile, expectedSourceFile);
      expect(astsEqual).toBe(true);
    }
  });
});
