export default {
  meta: {
    type: "problem",
    fixable: "code",
    docs: {
      description: "Disallow variable names ending with numbers",
      category: "Best Practices",
      recommended: false,
    },
    messages: {
      noNumberEnding: "Variable '{{name}}' should not end with a number.",
    },
    schema: [],
  },
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
};
