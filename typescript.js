const base = require('./base');

module.exports = {
  ...base.baseReact,
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    ...base.baseReact.extends,
  ],

  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        ...base.baseReact.extends,
      ],

      plugins: [
        '@typescript-eslint',
        ...base.baseReact.plugins,
      ],
      rules: {
        ...base.baseReact.rules,
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'no-use-before-define': 0,
        '@typescript-eslint/no-use-before-define': [
          'warn', { functions: false, classes: false, variables: false },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
};
