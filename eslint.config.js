import rules from "./index.js";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // Match JavaScript and TypeScript files
    ignores: ["node_modules/**", "dist/**", "amplify/**"], // Ignore common folders
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      "custom-rules": rules,
    },
    rules: {
      "custom-rules/no-number": "error",
    },
  },
];
