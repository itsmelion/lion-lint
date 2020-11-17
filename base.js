exports.extends = [
  'standard',
  'eslint:recommended',
  'airbnb-base',
  'airbnb-base/whitespace',
];

exports.plugins = [
  'standard',
  'promise',
  'import',
];

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
  'import/prefer-default-export': 'off',
  'import/no-extraneous-dependencies': [
    'warn',
    {
      devDependencies: [
        '**/*.test.js', '**/*.test.jsx', '**/*.test.tsx', '**/*.test.ts',
        '**/*.stories.js', '**/*.stories.jsx', '**/*.stories.tsx', '**/*.stories.ts',
      ],
      packageDir: [__dirname, process.cwd()],
    },
  ],
  'promise/no-return-wrap': 'error',
  'promise/param-names': 'error',
  'promise/always-return': 2,
  'promise/catch-or-return': 2,
  'promise/no-nesting': 1,

  'no-use-before-define': ['warn', { functions: false, classes: false }],
  'max-len': ['error', {
    code: 100,
    tabWidth: 2,
    ignoreComments: true,
    ignoreTrailingComments: true,
    ignoreUrls: true,
    ignoreStrings: false,
    ignoreTemplateLiterals: false,
    ignoreRegExpLiterals: true,
  }],
  'arrow-parens': 'off',
  'no-console': [
    'warn', {
      allow: [
        'warn',
        'error',
        'time',
        'timeLog',
        'timeEnd',
        'info',
        'group',
        'groupCollapsed',
        'groupEnd',
        'count',
        'countReset',
        'assert',
      ],
    },
  ],

  // Warn against template literal placeholder syntax in regular strings
  'no-template-curly-in-string': 1,

  // Warn if return statements do not either always or never specify values
  'consistent-return': 1,

  // Warn if no return statements in callbacks of array methods
  'array-callback-return': 1,

  // Require the use of === and !==
  eqeqeq: 2,

  // Disallow the use of alert, confirm, and prompt
  'no-alert': 2,

  // Disallow the use of arguments.caller or arguments.callee
  'no-caller': 2,

  // Disallow null comparisons without type-checking operators
  'no-eq-null': 2,

  // Disallow the use of eval()
  'no-eval': 2,

  // Warn against extending native types
  'no-extend-native': 1,

  // Warn against unnecessary calls to .bind()
  'no-extra-bind': 1,

  // Warn against unnecessary labels
  'no-extra-label': 1,

  // Disallow leading or trailing decimal points in numeric literals
  'no-floating-decimal': 2,

  // Warn against shorthand type conversions
  'no-implicit-coercion': 1,

  // Warn against function declarations and expressions inside loop statements
  'no-loop-func': 1,

  // Disallow new operators with the Function object
  'no-new-func': 2,

  // Warn against new operators with the String, Number, and Boolean objects
  'no-new-wrappers': 1,

  // Disallow throwing literals as exceptions
  'no-throw-literal': 2,

  // Require using Error objects as Promise rejection reasons
  'prefer-promise-reject-errors': 2,

  // Enforce “for” loop update clause moving the counter in the right direction
  'for-direction': 2,

  // Enforce return statements in getters
  'getter-return': 2,

  // Disallow await inside of loops
  'no-await-in-loop': 2,

  // Disallow comparing against -0
  'no-compare-neg-zero': 2,

  // Warn against catch clause parameters from shadowing variables in the outer scope
  'no-catch-shadow': 1,

  // Disallow identifiers from shadowing restricted names
  'no-shadow-restricted-names': 2,

  // Enforce return statements in callbacks of array methods
  'callback-return': 2,

  // Require error handling in callbacks
  'handle-callback-err': 2,

  // Warn against string concatenation with __dirname and __filename
  'no-path-concat': 1,

  // Prefer using arrow functions for callbacks
  'prefer-arrow-callback': 1,
};

exports.baseReact = {
  parser: 'babel-eslint',
  reportUnusedDisableDirectives: true,

  extends: [
    ...this.extends,
    'plugin:react/recommended',
    'airbnb',
    'airbnb/whitespace',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'airbnb/hooks',
  ],

  plugins: [
    ...this.plugins,
    'react',
    'jsx-a11y',
    'react-hooks',
  ],

  env: {
    node: true,
    commonjs: true,
    browser: true,
    es2020: true,
  },

  globals: this.globals,

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },

  settings: {
    ...this.settings,

    // Tells eslint-plugin-react to automatically detect the version of React to use
    react: { version: 'detect' },
  },

  rules: {
    ...this.rules,

    // ignore young React v17
    'no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^React$',
        argsIgnorePattern: '^_|ref',
      },
    ],
    '@typescript-eslint/no-unused-vars': 'off',

    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': [
      'warn', { functions: false, classes: true, variables: false },
    ],
    'import/order': ['warn', {
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    }],
    'import/no-default-export': 1,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-closing-bracket-location': [
      'warn', { selfClosing: 'tag-aligned', nonEmpty: 'after-props' },
    ],
    'react/jsx-pascal-case': 1,
    'react/jsx-sort-props': 1,
    'react/jsx-no-useless-fragment': 2,
    'react/jsx-fragments': [2, 'syntax'],
    'react/no-adjacent-inline-elements': 1,
    'react/no-danger': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'react/prop-types': 'off',
    'react/state-in-constructor': ['warn', 'never'],
  },
};
