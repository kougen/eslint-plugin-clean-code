import tsEslint from 'typescript-eslint';
import eslint from '@eslint/js';
import customPlugin from './dist/index.js';

export default tsEslint.config(
  eslint.configs.recommended, // a set of recommended ESLint rules
  ...tsEslint.configs.recommended, // a set of recommended TypeScript ESLint rules
  {
    languageOptions: {
      parser: tsEslint.parser,
    },
    files: ['*.ts'],
    plugins: {
      customPlugin
    },
    rules: {
      'customPlugin/no-number': 'error',
    },
  }
);