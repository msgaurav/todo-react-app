module.exports = {
  // Make sure eslint picks up the config at the root of the directory
  root: true,

  env: {
    // Enables browser globals like window and document
    browser : true,
    commonjs: true,
    es6     : true,
    // Enables Node.js global variables and Node.js scoping.
    node    : true,
  },

  // Enables a number of recommended linting rules automatically
  extends: [
    'eslint:recommended',
    // Validate our imports when we import files
    'plugin:import/errors',
    // and Alert us if we type the path to a file that doesn't exist
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],

  // Assure that ESLint can understand our code
  parser: '@babel/eslint-parser',

  parserOptions: {
    // Use the latest ecmascript standard
    ecmaVersion : 11,
    // Allows using import/export statements
    sourceType  : 'module',
    ecmaFeatures: {
      // Enable JSX since we're using React
      jsx: true,
    },
  },

  plugins: ['react', 'react-hooks', 'import', 'jest', 'jsx-a11y'],

  rules: {
    // In Next.js we use the Link component for wrapping the <a></a> tag
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components : ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects    : ['invalidHref', 'preferButton'],
      },
    ],
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // This rule can take one argument to ignore some specific props during validation
    'react/prop-types'            : ['error',
      {
        ignore          : ['pageProps'],
        customValidators: [],
        skipUndeclared  : false,
      },
    ],
    // Some Rules of Format Code with ESLint
    indent       : ['error', 2],
    'key-spacing': [2, { align: 'colon' }],
    'max-len'    : ['error', { code: 100 }],
    quotes       : ['error', 'single'],
    semi         : ['error', 'never'],
  },

  settings: {
    // Automatically detect the react version
    react: {
      version: 'detect',
    },
  },
}
