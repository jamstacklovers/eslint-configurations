"use strict";

const variableNamesBlacklist = ["objs", "foo", "bar", "baz"];

module.exports = {
  extends: ["eslint:recommended"],

  plugins: ["import", "unicorn", "security"],

  rules: {
    // imports
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling"],
        "newlines-between": "always",
      },
    ],

    // complexity
    complexity: ["error", { max: 6 }],
    "max-statements": ["error", 12, { ignoreTopLevelFunctions: true }],
    "max-depth": ["error", { max: 4 }],
    "max-params": ["error", { max: 5 }],
    "max-nested-callbacks": ["error", { max: 3 }],
    "max-classes-per-file": ["error", 3],

    // ternary expressions
    "multiline-ternary": ["error", "never"],
    "no-nested-ternary": "error",

    // operators
    "operator-assignment": ["error", "always"],

    // control statements
    "for-direction": "error",
    "no-lonely-if": "error",
    "no-else-return": ["error", { allowElseIf: false }],
    "no-empty": "error",
    "no-labels": "error",
    "no-extra-label": "error",
    "no-loop-func": "error",
    "no-bitwise": "error",
    "no-multi-assign": "error",
    "no-plusplus": "error",

    // naming
    "no-shadow": "error",
    "func-name-matching": ["error", "always"],
    "no-native-reassign": "error",
    "consistent-this": ["error", "self"],
    "no-catch-shadow": "error",
    "no-underscore-dangle": "error",
    "no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
      },
    ],
    "id-blacklist": ["error", ...variableNamesBlacklist],
    "id-length": ["error", { min: 2 }],
    "unicorn/filename-case": ["error", { case: "kebabCase" }],

    // returns
    "consistent-return": "error",
    "getter-return": "error",

    // strings
    "prefer-template": "error",
    "no-useless-concat": "error",

    // generators
    "require-yield": "error",

    // async/await
    "require-atomic-updates": "error",

    // switch/case
    "no-case-declarations": "error",
    "default-case": ["error", { commentPattern: "^no default$" }],

    // regex
    "require-unicode-regexp": "error",
    "no-misleading-character-class": "error",

    // warn about using console or debugger in development, fail in production
    "no-console": [
      process.env.NODE_ENV !== "production" ? 1 : 2,
      {
        allow: ["warn", "error", "info"],
      },
    ],
    "no-debugger": process.env.NODE_ENV !== "production" ? 1 : 2,
    "no-alert": process.env.NODE_ENV !== "production" ? 1 : 2,

    // use new syntax
    "no-void": "error",
    "prefer-arrow-callback": "error",
    "no-confusing-arrow": ["error", { allowParens: false }],
    "prefer-rest-params": "error",
    "object-shorthand": "error",
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "no-var": "error",
    "prefer-const": ["error", { ignoreReadBeforeAssign: false }],

    // best practices
    "vars-on-top": "error",
    "no-implicit-coercion": "error",
    "dot-notation": "error",
    "guard-for-in": "error",
    radix: "error",
    "no-div-regex": "error",
    "prefer-object-spread": "error",
    "no-empty-function": ["error"],

    // security hardening
    "no-script-url": "error",
    "security/detect-buffer-noassert": "error",
    "security/detect-child-process": "error",
    "security/detect-disable-mustache-escape": "error",
    "security/detect-eval-with-expression": "error",
    "security/detect-new-buffer": "error",
    "security/detect-no-csrf-before-method-override": "error",
    "security/detect-non-literal-regexp": "error",
    "security/detect-non-literal-require": "error",
    "security/detect-possible-timing-attacks": "error",
    "security/detect-pseudoRandomBytes": "error",
    "security/detect-unsafe-regex": "error",

    // too restrictive on abbreviations, they are part of API
    "unicorn/prevent-abbreviations": "off",
  },
};
