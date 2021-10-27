const path = require('path');

exports.imports = {
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],
  'import/order': [
    'warn',
    {
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    },
  ],

  // Favor named exports
  'import/no-default-export': 1,
  'import/prefer-default-export': 'off',

  'import/no-extraneous-dependencies': [
    'warn',
    {
      peerDependencies: true,
      devDependencies: [
        '**/*.test.js',
        '**/*.test.jsx',
        '**/*.test.tsx',
        '**/*.test.ts',
        '**/*.stories.js',
        '**/*.stories.jsx',
        '**/*.stories.tsx',
        '**/*.stories.ts',
      ],
      packageDir: [
        __dirname,
        path.join(process.cwd(), __dirname),
        path.join(process.cwd(), __dirname, 'packages'),
      ],
    },
  ],
};
