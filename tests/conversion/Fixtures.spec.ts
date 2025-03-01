/* eslint-disable default-case */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/*
 * Copyright (c) Mike Lischke. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import * as fs from "fs/promises";
import * as path from "path";
import { expect, describe, afterAll, test, beforeAll } from "vitest";
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

/**
 * Generates a diff between two TypeScript ASTs and returns a string representation
 * of the differences.
 * @param sourceFile1 First source file
 * @param sourceFile2 Second source file
 * @returns A string containing the differences between the ASTs
 */
function diffAsts(
  sourceFile1: ts.SourceFile,
  sourceFile2: ts.SourceFile
): string {
  const differences: string[] = [];

  /**
   *
   * @param node
   */
  function getNodePath(node: ts.Node): string {
    const parts: string[] = [];
    let current: ts.Node | undefined = node;

    while (current) {
      let name = ts.SyntaxKind[current.kind];

      // Add more specific information for certain node types
      if (ts.isIdentifier(current)) {
        name += ` (${current.text})`;
      } else if (ts.isPropertyDeclaration(current)) {
        const propName = current.name.getText();
        name += ` (${propName})`;
      } else if (ts.isMethodDeclaration(current)) {
        const methodName = current.name.getText();
        name += ` (${methodName})`;
      } else if (ts.isClassDeclaration(current) && current.name) {
        name += ` (${current.name.text})`;
      }

      parts.unshift(name);
      current = current.parent;
    }

    return parts.join(" > ");
  }

  /**
   *
   * @param node1
   * @param node2
   * @param path
   */
  function compareNodes(
    node1: ts.Node,
    node2: ts.Node,
    path: string = ""
  ): void {
    // Check if node kinds are the same
    if (node1.kind !== node2.kind) {
      differences.push(`Different node kinds at ${path}:`);
      differences.push(`  Expected: ${ts.SyntaxKind[node1.kind]}`);
      differences.push(`  Actual: ${ts.SyntaxKind[node2.kind]}`);
      differences.push(`expected: ${node1.getFullText()}`);
      differences.push(`actual: ${node2.getFullText()}`);
      differences.push("--");

      return;
    }

    // Compare specific node properties based on kind
    switch (node1.kind) {
      case ts.SyntaxKind.Identifier:
        const id1 = node1 as ts.Identifier;
        const id2 = node2 as ts.Identifier;
        if (id1.text !== id2.text) {
          differences.push(`Different identifier text at ${path}:`);
          differences.push(`  Expected: "${id1.text}"`);
          differences.push(`  Actual: "${id2.text}"`);
        }
        break;

      case ts.SyntaxKind.StringLiteral:
      case ts.SyntaxKind.NumericLiteral:
        const lit1 = node1 as ts.LiteralExpression;
        const lit2 = node2 as ts.LiteralExpression;
        if (lit1.text !== lit2.text) {
          differences.push(`Different literal value at ${path}:`);
          differences.push(`  Expected: "${lit1.text}"`);
          differences.push(`  Actual: "${lit2.text}"`);
        }
        break;

      case ts.SyntaxKind.PropertyDeclaration:
        const prop1 = node1 as ts.PropertyDeclaration;
        const prop2 = node2 as ts.PropertyDeclaration;

        // Compare property names
        compareNodes(prop1.name, prop2.name, `${path} > name`);

        // Compare property types if they exist
        if (prop1.type && prop2.type) {
          compareNodes(prop1.type, prop2.type, `${path} > type`);
        } else if (prop1.type || prop2.type) {
          differences.push(`Property type mismatch at ${path}:`);
          differences.push(
            `  Expected: ${prop1.type ? "has type" : "no type"}`
          );
          differences.push(`  Actual: ${prop2.type ? "has type" : "no type"}`);
        }
        break;
    }

    // Compare children recursively
    const children1 = Array.from(node1.getChildren(sourceFile1));
    const children2 = Array.from(node2.getChildren(sourceFile2));

    if (children1.length !== children2.length) {
      differences.push(`Different number of children at ${path}:`);
      differences.push(`  Expected: ${children1.length} children`);
      differences.push(`  Actual: ${children2.length} children`);
      differences.push(
        `expected: ${children1
          .map((c) => {
            return c.getFullText();
          })
          .join("\n")}`
      );
      differences.push(
        `actual: ${children2
          .map((c) => {
            return c.getFullText();
          })
          .join("\n")}`
      );

      // Try to match as many children as possible
      const minLength = Math.min(children1.length, children2.length);
      for (let i = 0; i < minLength; i++) {
        compareNodes(children1[i], children2[i], `${path} > child[${i}]`);
      }
    } else {
      // Same number of children, compare each one
      for (let i = 0; i < children1.length; i++) {
        compareNodes(children1[i], children2[i], `${path} > child[${i}]`);
      }
    }
  }

  // Start comparison from the root
  compareNodes(sourceFile1, sourceFile2, getNodePath(sourceFile1));

  return differences.join("\n");
}

describe("Fixtures Tests", () => {
  const testDir = path.join(process.cwd(), "tests");
  const fixturesDir = path.join(testDir, "conversion", "fixtures");
  const javaFixturesDir = path.join(fixturesDir, "java");
  const tsFixturesDir = path.join(fixturesDir, "ts");
  const targetDir = path.join(testDir, "conversion", "generated-fixtures");

  // Store Java files for test.each
  const javaFiles: string[] = [];
  let javaFilePaths: string[] = [];

  beforeAll(async () => {
    // Ensure the target directory exists
    try {
      await fs.mkdir(fixturesDir, { recursive: true });
      await fs.mkdir(javaFixturesDir, { recursive: true });
      await fs.mkdir(tsFixturesDir, { recursive: true });
      await fs.mkdir(targetDir, { recursive: true });
    } catch (e) {
      // Ignore if directory already exists
    }

    // Get all Java files from the fixtures directory
    // javaFiles = (await fs.readdir(javaFixturesDir)).filter((file) => {
    //   return file.endsWith(".java");
    // });

    javaFilePaths = javaFiles.map((file) => {
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
  });

  afterAll(async () => {
    // await fs.rm(targetDir, { recursive: true, force: true });
  });

  const files = [
//    "./tests/conversion/fixtures/java/One.java",
//    "./tests/conversion/fixtures/java/OverloadTest.java",
//    "./tests/conversion/fixtures/java/PrivateObject.java",
//     "./tests/conversion/fixtures/java/RootPanel.java",
     "./tests/conversion/fixtures/java/Cookies.java",
  ];

  test.each(files)("Converts %s correctly", async (javaFile) => {
    console.log(">>>>>>> javaFile", javaFile);
    const baseName = path.basename(javaFile, ".java");
    const generatedTsPath = path.join(targetDir, `${baseName}.ts`);
    const expectedTsPath = path.join(tsFixturesDir, `${baseName}.ts`);

    // Check if expected fixture exists
    try {
      await fs.access(expectedTsPath);
    } catch (e) {
      // create empty file
      await fs.writeFile(expectedTsPath, "");
    }

    // Read files
    const generatedContent = (
      await fs.readFile(generatedTsPath, "utf8")
    ).trim();

    const expectedContent = (await fs.readFile(expectedTsPath, "utf8")).trim();
    console.log("generated:", generatedTsPath);
    console.log("expected:", expectedTsPath);
    console.log('expected-----------');
    console.log(expectedContent);
    console.log('generated-----------');
    console.log(generatedContent);

    expect(generatedContent.includes("/*-")).toBe(false);
    
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

    if (!astsEqual) {
      // Generate and log the AST differences
      const differences = diffAsts(expectedSourceFile, generatedSourceFile);
      console.log(`AST differences for ${baseName}:`);
      console.log(differences);
      console.log("GENERATED");
      console.log(generatedContent);
      console.log("EXPECTED");
      console.log(expectedContent);
    }

    expect(astsEqual).toBe(true);
  });
});
