const base = require('./base');

module.exports = {
  ...base.baseReact,

  globals: {
    // fetch: 'readonly',
    ...base.baseReact.globals,
    __DEV__: 'readonly',
  },

  settings: {
    ...base.baseReact.settings,
    'import/resolver': {
      node: {
        paths: ['./', './src'],
        extensions: [
          '.js',
          '.ts',
          '.jsx',
          '.tsx',
          '.json',
          '.native.js',
          '.native.ts',
          '.native.jsx',
          '.native.tsx',
          '.native.json',
          '.web.js',
          '.web.ts',
          '.web.jsx',
          '.web.tsx',
          '.web.json',
          '.ios.js',
          '.ios.ts',
          '.ios.jsx',
          '.ios.tsx',
          '.ios.json',
          '.android.js',
          '.android.ts',
          '.android.jsx',
          '.android.tsx',
          '.android.json',
        ],
        moduleDirectory: ['node_modules', 'src'],
      },

      alias: {
        map: [
          ['assets', './assets'],
          ['components', './components'],
          ['app', './'],
          ['src', './'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
};
