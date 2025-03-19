import {ESLintUtils} from '@typescript-eslint/utils';
import path from 'path';

/**
 * URL encode the rule name
 * @param name - The rule name
 * @returns The URL encoded rule name
 */
const encode = (name: string) => encodeURIComponent(name);

const createRule = ESLintUtils.RuleCreator(name => `https://github.com/eslint-plugin-clean-code/wiki/${encode(name)}`);

export default createRule({
  name: "no-variable-with-number-at-end",
  meta: {
    type: "problem",
    fixable: "code",
    docs: {
      description: "Disallow variable names ending with numbers",
    },
    messages: {
      noNumberEnding: "Variable '{{name}}' should not end with a number.",
    },
    schema: [],
  },
  defaultOptions: [{extensions: [".ts", ".js"]}],
  create(context, [{extensions}]) {
    const filename = context.filename;
    const ext = path.extname(filename);

    if (!extensions.includes(ext)) {
      return {};
    }

    return {
      Identifier(node) {
        const variableName = node.name;
        if (/\d$/.test(variableName)) {
          context.report({
            node,
            messageId: "noNumberEnding",
            data: {
              name: variableName,
            },
          });
        }
      },
    };
  },
});
