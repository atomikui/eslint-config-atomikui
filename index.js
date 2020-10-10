const { OFF, WARN, ERROR } = require("./constants");

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier/react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: false,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },

  plugins: ["react"],
  rules: {
    "arrow-body-style": ["error", "always"],
    "implicit-arrow-linebreak": OFF,
    "max-len": [
      "warn",
      {
        ignoreComments: true,
        code: 85,
        comments: 85,
      },
    ],
    "no-unused-vars": OFF,
    "object-curly-newline": OFF,
    "object-property-newline": ERROR,
  },
};
