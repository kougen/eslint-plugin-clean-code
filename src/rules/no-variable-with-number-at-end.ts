import {Rule} from "eslint";
import NodeParentExtension = Rule.NodeParentExtension;
import {Identifier} from "estree";


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
  create(context: Rule.RuleContext) {
    return {
      Identifier(node: Identifier & NodeParentExtension) {
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
} as Rule.RuleModule;
