module.exports = {
  extends: [
    "lion"
  ],
  rules: {
    "react/jsx-filename-extension": 0,
    "import/no-extraneous-dependencies": 0
  },
  globals: {
    fetch: 'readonly',
    __DEV__: 'readonly',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./'],
        extensions: [
          '.js',
          '.ts',
          '.jsx',
          '.tsx',
          '.json',
          '.native',
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
