const base = require('./base');

module.exports = {
  reportUnusedDisableDirectives: true,

  extends: [
    ...base.extends,
    'plugin:node/recommended',
  ],

  plugins: [
    ...base.plugins,
    'node',
  ],

  env: {
    node: true,
    commonjs: true,
  },

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

  rules: base.rules,
};
