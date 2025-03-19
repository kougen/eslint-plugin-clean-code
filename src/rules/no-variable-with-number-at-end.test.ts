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
      {code: "const foo123 = 'bar';", filename: "ignore.txt"}
    ],
    invalid: [{
      code: "const foo2 = 'bar';",
      errors: [{messageId: "noNumberEnding"}],
    }],
  }
);

ruleTester.run(
  "no-number (custom extensions)",
  noVariableWithNumberAtEnd,
  {
    valid: [
      {code: "const foo = 'bar';", filename: "file.ts", options: [{extensions: [".ts"]}]},
      {code: "const foo123 = 'bar';", filename: "file.js", options: [{extensions: [".ts"]}]},
    ],
    invalid: [
      {
        code: "const foo2 = 'bar';",
        filename: "file.ts",
        options: [{extensions: [".ts"]}],
        errors: [{messageId: "noNumberEnding"}],
      }
    ],
  }
);