import typescriptEslintParser from "@typescript-eslint/parser";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // Match JavaScript and TypeScript files
    ignores: ["node_modules/**", "dist/**", "amplify/**"], // Ignore common folders
    languageOptions: {
      parser: typescriptEslintParser, // Pass the parser object, not a string
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
];
