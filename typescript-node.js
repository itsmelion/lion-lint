const base = require('./base');

module.exports = {
  reportUnusedDisableDirectives: true,
  parser: 'babel-eslint',

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    ...base.extends,
  ],

  plugins: [
    '@typescript-eslint',
    ...base.plugins,
  ],

  overrides: [
    {
      parser: '@typescript-eslint/parser',

      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': ['warn'],
      },
    },
  ],

  env: {
    node: true,
    commonjs: true,
    es2020: true,
  },

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
      modules: true,
    },
  },

  settings: base.settings,

  rules: {
    ...base.rules,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error', { functions: false, classes: false, variables: false },
    ],
  },
};
