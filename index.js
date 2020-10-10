const { OFF, WARN, ERROR } = require("./constants");

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
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

  plugins: ["react-hooks"],
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
