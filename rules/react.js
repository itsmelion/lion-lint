exports.react = {
  'react/jsx-pascal-case': 1,
  'react/jsx-sort-props': 1,
  'react/jsx-no-useless-fragment': 2,
  'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
  'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  'react/no-array-index-key': 'warn',
  'react/jsx-key': [
    'error',
    {
      checkFragmentShorthand: true,
      checkKeyMustBeforeSpread: true,
    },
  ],

  // React 17 JSX transformer
  'react/jsx-uses-react': 'off',
  'react/react-in-jsx-scope': 'off',
}
