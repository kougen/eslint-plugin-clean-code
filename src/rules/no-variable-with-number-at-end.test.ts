import { RuleTester } from '@typescript-eslint/rule-tester';
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
    valid: [{
      code: "const foo = 'bar';",
    }],
    invalid: [{
      code: "const foo2 = 'bar';",
      errors: [{ messageId: "noNumberEnding" }],
    }],
  }
);