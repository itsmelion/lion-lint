module.exports = {
  parser: "babel-eslint",
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "plugin:react-hooks/recommended",
    "airbnb/hooks",
    "airbnb/whitespace",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: [
    "standard",
    "import",
    "promise",
    "react",
    "jsx-a11y",
    "react-hooks"
  ],
  rules: {
    "max-len": ["error", {
      "code": 100,
      "tabWidth": 2,
      "ignoreComments": true,
      "ignoreTrailingComments": true,
      "ignoreUrls": true,
      "ignoreStrings": false,
      "ignoreTemplateLiterals": false,
      "ignoreRegExpLiterals": true,
    }],
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "react/prop-types": "off",
    "react/state-in-constructor": ["warn", "never"],
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "arrow-parens": "off",
    "no-console": ["error", { "allow": ["warn", "error"] }],
    "react/jsx-closing-bracket-location": ["warn", { "selfClosing": "tag-aligned", "nonEmpty": "after-props" }],
    "react/jsx-pascal-case": 1,
    "react/jsx-sort-props": 1,
    "react/jsx-no-useless-fragment": 2,
    "react/jsx-fragments": [2, "syntax"],
    "react/no-adjacent-inline-elements": 1,
    "react/no-danger": "error",
    "react/function-component-definition": [1, {
      "namedComponents": "arrow-function",
      "unnamedComponents": "arrow-function",
    }]
  },
  settings: {
  "import/resolver": {
    "node": { "paths": ["./src"] } },
  },
  env: {
    // Mind that react-native doesnt fully implement browsers API.
    "browser": true,
    "es6": true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
    }
  },
};
