const {
  generic, promises, imports, react, whitespace,
} = require('./rules');

exports.extends = [
  'standard',
  'eslint:recommended',
  'airbnb-base',
  'airbnb-base/whitespace',
];

exports.plugins = ['promise', 'import'];

exports.settings = {
  'import/resolver': {
    node: {
      paths: ['./src', './packages'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      moduleDirectory: ['node_modules', './src', './packages'],
    },
  },
};

exports.rules = {
  ...generic,
  ...promises,
  ...imports,
  ...react,
  ...whitespace,
};

exports.baseReact = {
  parser: '@babel/eslint-parser',
  reportUnusedDisableDirectives: true,

  extends: [
    ...this.extends,
    'plugin:react/recommended',
    'airbnb',
    'airbnb/whitespace',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'airbnb/hooks',
  ],

  plugins: [...this.plugins, 'react', 'jsx-a11y', 'react-hooks'],

  env: {
    node: true,
    commonjs: true,
    browser: true,
    es2020: true,
  },

  globals: this.globals,

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },

  settings: {
    ...this.settings,

    // Tells eslint-plugin-react to automatically detect the version of React to use
    react: { version: 'detect' },
  },

  rules: this.rules,
};
