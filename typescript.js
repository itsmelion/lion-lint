const base = require('./base');

module.exports = {
  ...base.baseReact,

  extends: [
    ...base.baseReact.extends,
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],

  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        ...base.baseReact.extends,
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
      ],

      plugins: [
        ...base.baseReact.plugins,
        '@typescript-eslint',
      ],

      rules: {
        ...base.baseReact.rules,
        'no-use-before-define': 0,

        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',

        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            // varsIgnorePattern: '^React$',
            argsIgnorePattern: '^_|ref',
          },
        ],
      },
    },
  ],
};
