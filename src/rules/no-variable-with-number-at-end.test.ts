import {RuleTester} from '@typescript-eslint/rule-tester';
import noVariableWithNumberAtEnd from "./no-variable-with-number-at-end";


const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  }
});

ruleTester.run(
  "no-number",
  noVariableWithNumberAtEnd,
  {
    valid: [
      {code: "const foo = 'bar';", filename: "file.ts"},
      {code: "const foo123 = 'bar';", filename: "ignore.txt"},
      {code: "const s3 = 'bar';", filename: "file.ts"},
      {code: "const v4 = 'bar';", filename: "file.ts"},
      {code: "const getS3 = () => 'bar';", filename: "file.ts"},
    ],
    invalid: [
      {
        code: "const foo2 = 'bar';",
        filename: "file.ts",
        errors: [{messageId: "noNumberEnding"}],
      },
      {
        code: "const foo2 = 'bar';",
        filename: "file.js",
        errors: [{messageId: "noNumberEnding"}],
      }
    ],
  }
);

ruleTester.run(
  "no-number (custom extensions)",
  noVariableWithNumberAtEnd,
  {
    valid: [
      {
        code: "const foo = 'bar';",
        filename: "file.ts",
        options: [{extensions: [".ts"], allow: ["s3", "v4"], allowRegex: ["S3$"]}]
      },
      {
        code: "const foo123 = 'bar';",
        filename: "file.js",
        options: [{extensions: [".ts"], allow: ["s3", "v4"], allowRegex: ["S3$"]}]
      },
    ],
    invalid: [
      {
        code: "const foo2 = 'bar';",
        filename: "file.ts",
        options: [{extensions: [".ts"], allow: ["s3", "v4"], allowRegex: ["S3$"]}],
        errors: [{messageId: "noNumberEnding"}],
      }
    ],
  }
);

ruleTester.run(
  "no-number (custom allow)",
  noVariableWithNumberAtEnd,
  {
    valid: [
      {
        code: "const foo = 'bar';",
        filename: "file.ts",
        options: [{extensions: [".ts", ".js"], allow: ["s3", "v4"], allowRegex: ["S3$"]}]
      },
      {
        code: "const foo123 = 'bar';",
        filename: "file.ts",
        options: [{extensions: [".ts", ".js"], allow: ["foo123"], allowRegex: ["S3$"]}]
      },
      {
        code: "const s3 = 'bar';",
        filename: "file.ts",
        options: [{extensions: [".ts", ".js"], allow: ["s3", "v4"], allowRegex: ["S3$"]}]
      },
      {
        code: "const v4 = 'bar';",
        filename: "file.ts",
        options: [{extensions: [".ts", ".js"], allow: ["s3", "v4"], allowRegex: ["S3$"]}]
      },
    ],
    invalid: [
      {
        code: "const foo2 = 'bar';",
        filename: "file.ts",
        options: [{extensions: [".ts", ".js"], allow: ["s3", "v4"], allowRegex: ["S3$"]}],
        errors: [{messageId: "noNumberEnding"}],
      }
    ],
  }
)

ruleTester.run(
  "no-number (custom allowRegex)",
  noVariableWithNumberAtEnd,
  {
    valid: [
      {
        code: "const fooV4 = 'bar';",
        filename: "file.ts",
        options: [{extensions: [".ts", ".js"], allow: ["s3", "v4"], allowRegex: ["S3$", "V4$"]}]
      },
    ],
    invalid: [
      {
        code: "const fooS3 = 'bar';",
        filename: "file.ts",
        options: [{extensions: [".ts", ".js"], allow: ["s3", "v4"], allowRegex: []}],
        errors: [{messageId: "noNumberEnding"}],
      }
    ],
  }
)
