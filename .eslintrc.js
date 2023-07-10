module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: ["eslint:recommended", "prettier"],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module",
    },
    rules: {
      "no-debugger": "true",
      "no-extra-semi": "error",
    },
  };