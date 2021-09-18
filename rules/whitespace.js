exports.whitespace = {
  indent: ['error', 2],
  'max-len': [
    'error',
    {
      code: 100,
      tabWidth: 2,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: false,
      ignoreTemplateLiterals: false,
      ignoreRegExpLiterals: true,
    },
  ],
};
