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
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.native.js', '.web.js', '.ios.js', '.android.js'],
      },
      alias: {
        map: [
          ['assets', './assets'],
          ['components', './components'],
          ['app', './'],
          ['src', './'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
    },
  },
};
