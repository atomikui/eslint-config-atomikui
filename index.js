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
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react-perf/recommended",
    "plugin:sonarjs/recommended",
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

  plugins: [
    "import",
    "jsx",
    "jsx-a11y",
    "prettier",
    "react",
    "react-hooks",
    "react-perf",
    "sonarjs",
  ],
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
    "object-curly-newline": OFF,
    "object-property-newline": ERROR,
    "react/jsx-props-no-spreading": OFF,
    "react/button-has-type": OFF,
  },
};
