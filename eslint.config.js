import rules from "./index.js";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: ["node_modules/**", "dist/**", "amplify/**"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    plugins: {
      "custom-rules": rules,
    },
    rules: {
      "custom-rules/no-number": "error",
      "custom-rules/foo-bar": "error",
    },
  },
];
