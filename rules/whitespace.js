const prettierConfig = require('../.prettierrc');

exports.whitespace = {
  'max-len': [
    'error',
    {
      code: prettierConfig.printWidth || 85,
      tabWidth: prettierConfig.tabWidth || 2,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: false,
      ignoreTemplateLiterals: false,
      ignoreRegExpLiterals: true,
    },
  ],
};
