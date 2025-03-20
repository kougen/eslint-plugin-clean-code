# eslint-plugin: clean-code

# Clean Code Rules

# `no-number`

Avoid using numbers at the end of variable or function names.

## Rule Details

Examples of **incorrect** code for this rule:

```js
const foo1 = 1;
const bar2 = 2;

function baz3() {
  return 3;
}
```

Examples of **correct** code for this rule:

```js

const foo = 1;
const bar = 2;

function baz() {
  return 3;
}
```

### Options

You can pass an `allow` option to specify a list of variable or function names that are allowed to have numbers at the end. 
By default, the rule allows `s3` and `v4` as they are common in the JavaScript world. (e.g. `s3` for AWS S3, `v4` for UUID v4)

```json
{
  "clean-code/no-number": ["error", {
    "allow": ["s3", "v4"]
  }]
}
```

You can pass an `extensions` option to specify a list of file extensions that will be checked. By default, the rule checks `.js`, `.jsx`, `.ts`, and `.tsx` files.

```json
{
  "clean-code/no-number": ["error", {
    "extensions": [".js", ".jsx", ".ts", ".tsx"]
  }]
}
```

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

      "clean-code": eslintCleanCode,
    },
    rules: {
      "clean-code/no-number": "error",
    }
  }
]
```
