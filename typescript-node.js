const base = require('./base');
const { typescriptGenerics } = require('./rules');

module.exports = {
  reportUnusedDisableDirectives: true,
  parser: '@babel/eslint-parser',

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
    es2021: true,
  },

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
      modules: true,
    },
  },

  settings: base.settings,

  rules: {
    ...base.rules,
    ...typescriptGenerics,
  },
};
