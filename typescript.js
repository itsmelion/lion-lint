const base = require('./base');

module.exports = {
  ...base.baseReact,

  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
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
        'no-use-before-define': 0,
      },
    },
  ],
};
