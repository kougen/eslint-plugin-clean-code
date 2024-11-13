import { ESLintUtils } from '@typescript-eslint/utils';

const createRule = ESLintUtils.RuleCreator(name => `https://kou-gen.net/eslint-clean-code/${name}`);

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
  defaultOptions: [],
  create(context) {
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
