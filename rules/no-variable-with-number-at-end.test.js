import { RuleTester } from "eslint";
import noVariableWithNumberAtEnd from "./no-variable-with-number-at-end.js";


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
      errors: 1,
    }],
  }
);

console.log("All tests passed!");