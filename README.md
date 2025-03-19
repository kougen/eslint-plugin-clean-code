# eslint-plugin: clean-code

# Clean Code Rules

- `no-number`: Avoid using numbers at the end of variable or function names.

# Installation

```bash
npm install @kougen/eslint-plugin-clean-code
```

# Usage

## `.eslintrc`
Add the plugin to your `.eslintrc` configuration file:

```json
{
  "plugins": ["@kougen/clean-code"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "@kougen/clean-code/no-number": "error"
  }
}
```

## Flat configuration

Add the following into your `esling.config.js`:

```js
export default [
  {
    // .....
    plugins: {

      ecc: eslintCleanCode,
    },
    rules: {
      "ecc/no-number": "error",
    }
  }
]
```
