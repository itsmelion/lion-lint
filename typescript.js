const base = require('./base');

module.exports = {
  ...base.baseReact,

  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        ...base.baseReact.extends,
      ],

      plugins: [
        '@typescript-eslint',
        ...base.baseReact.plugins,
      ],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': ['warn'],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-use-before-define': [
          'error', { functions: false, classes: false, variables: false },
        ],
      },
    },
  ],
};
