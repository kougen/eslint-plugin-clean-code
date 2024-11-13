import noVariableWithNumberAtEnd from "./rules/no-variable-with-number-at-end";
import {ESLint} from "eslint";

export default {
  rules:
    {
      "no-number": noVariableWithNumberAtEnd,
    },
} as ESLint.Plugin;