const { react } = require('./rules');
const typescript = require('./typescript');

module.exports = {
  ...typescript,

  extends: [
    ...typescript.extends,
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/whitespace',
    'airbnb/hooks',
  ],

  plugins: [...typescript.plugins, 'jsx-a11y', 'react', 'react-hooks'],

  env: {
    node: true,
    commonjs: true,
    browser: true,
    es2021: true,
  },

  globals: typescript.globals,

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },

  settings: {
    ...typescript.settings,

    // Tells eslint-plugin-react to automatically detect the version of React to use
    react: { version: 'detect' },
  },

  rules: {
    ...typescript.rules,
    ...react,
  },

  overrides: [
    {
      ...typescript.overrides,

      plugins: [
        ...typescript.plugins,
        '@typescript-eslint',
        'jsx-a11y', 'react', 'react-hooks',
      ],

      rules: {
        ...typescript.rules,
        ...react,
      },
    },
  ],
};
