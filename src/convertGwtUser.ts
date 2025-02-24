import {
  IConverterConfiguration,
  JavaToTypescriptConverter,
} from "./conversion/JavaToTypeScript.js";
import * as path from "path";
import { PackageSourceManager } from "./PackageSourceManager.js";
import { PackageSource } from "./PackageSource.js";

const include: string[] = [
  //"OSType.java",
];

const importResolver = (packageId: string): PackageSource | undefined => {
  return PackageSourceManager.emptySource(packageId);
};

const memberOrderOptions = {
  default: [
    "signature",
    "public-static-field",
    "protected-static-field",
    "private-static-field",
    "public-decorated-field",
    "protected-decorated-field",
    "private-decorated-field",
    "public-instance-field",
    "protected-instance-field",
    "private-instance-field",
    "public-abstract-field",
    "protected-abstract-field",
    "public-field",
    "protected-field",
    "private-field",
    "static-field",
    "instance-field",
    "abstract-field",
    "decorated-field",
    "field",
    "public-constructor",
    "protected-constructor",
    "private-constructor",
    "constructor",
    "public-static-method",
    "protected-static-method",
    "private-static-method",
    "public-decorated-method",
    "protected-decorated-method",
    "private-decorated-method",
    "public-instance-method",
    "protected-instance-method",
    "private-instance-method",
    "public-abstract-method",
    "protected-abstract-method",
  ],
};

/**
 * TODO:
 * set up a workflow here so I can run :
 *
 * pnpm tsx src/convertGwtUser.ts --include DOMEvent --include ...
 *
 * And it'll only update those java files. So I can fix the issues here
 * And check the output
 */
const convert = async () => {
  const options: IConverterConfiguration = {
    packageRoot: path.resolve(process.cwd(), "../gwt-experiment/user/src"),
    // packageRoot: path.resolve(
    //   process.cwd(),
    //   "../gwt-experiment/user/src/com/google/gwt/event/dom/client"
    // ),
    include,
    exclude: [],
    // outputPath: "../gwt-ts/user-ts-tester/",
    outputPath: "../gwt-ts/user-ts/",
    options: {
      importResolver,
      convertAnnotations: true,
      preferArrowFunctions: false,
      autoAddBraces: true,
      addIndexFiles: false,
      addNullUnionType: false,
      suppressTypeWithInitializer: true,
      wrapStringLiterals: false,
      memberOrderOptions,
      sourceMappings: [
        // {
        //   sourcePath: path.resolve(process.cwd(), "../antlr4/runtime/Java/src"),
        //   importPath: "antlr4ng",
        // },
      ],
      useUnqualifiedTypes: true,
      libraryImports: new Map([
        // [
        //   path.resolve(
        //     process.cwd(),
        //     "../ANTLRng/runtime-testsuite/decorators.js"
        //   ),
        //   ["Test", "Override"],
        // ],
      ]),
      importExtension: ".js",
    },
    sourceReplace: new Map([]),
    debug: {
      pathForPosition: {
        filePattern: "XXX",
        position: {
          row: 49,
          column: 5,
        },
      },
    },
  };

  const converter = new JavaToTypescriptConverter(options);
  await converter.startConversion();
};

await convert();
