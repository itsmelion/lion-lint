const base = require('./base');

module.exports = {
  parser: '@typescript-eslint/parser',
  reportUnusedDisableDirectives: true,
  extends: [
    'plugin:@typescript-eslint/recommended',
    ...base.baseReact.extends,
  ],

  plugins: [
    '@typescript-eslint',
    ...base.baseReact.plugins,
  ],

  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': ['warn'],
      },
    },
  ],

  env: base.baseReact.env,

  parserOptions: base.baseReact.parserOptions,

  settings: base.baseReact.settings,

  rules: {
    ...base.baseReact.rules,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error', { functions: false, classes: false, variables: false },
    ],
  },
};
