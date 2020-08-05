const base = require('./base');

module.exports = {
  reportUnusedDisableDirectives: true,

  extends: base.extends,

  plugins: base.plugins,

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
