const {
  generic, promises, imports, whitespace,
} = require('./rules');

exports.reportUnusedDisableDirectives = true;

exports.extends = [
  'eslint:recommended',
  'airbnb-base',
  'airbnb-base/whitespace',
];

exports.plugins = ['promise', 'import'];

exports.settings = {
  'import/resolver': {
    node: {
      paths: ['./src', './packages'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      moduleDirectory: ['node_modules', './src', './packages'],
    },
  },
};

exports.rules = {
  ...whitespace,
  ...generic,
  ...promises,
  ...imports,
};

exports.env = {
  node: true,
  commonjs: true,
  browser: true,
  es2021: true,
};
