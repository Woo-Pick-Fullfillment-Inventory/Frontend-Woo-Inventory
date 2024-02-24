module.exports = {
  env: {
    browser: true, // Indicates that the code is run in the browser environment
    es2021: true, // Enables ES2021 features
    node: true, // Include if your project is using Node.js in any form (e.g., for tooling or server-side code)
  },
  extends: [
    'eslint:recommended', // Start with ESLint recommended rules
    'plugin:@typescript-eslint/recommended', // Use recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:react/recommended', // React specific linting rules
    'plugin:react-hooks/recommended', // Enforces React hooks rules
    'plugin:import/errors', // Prevents import errors
    'plugin:import/warnings', // Warns about potential import issues
    'plugin:import/typescript', // Adds TypeScript support for import/export syntax
    'plugin:jsx-a11y/recommended', // Accessibility checks for JSX
  ],
  // parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    ecmaVersion: 12, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: [
    'react', // React plugin
    '@typescript-eslint', // TypeScript plugin
    'import', // Helps validate proper imports
    'jsx-a11y', // Accessibility checks
    'react-hooks', // React hooks rules
  ],
  settings: {
    react: {
      version: 'detect', // Automatically detect the version of React to use
    },
  },
  rules: {
    // Define custom rules or override default rules here
    'react/react-in-jsx-scope': 'off', // Not needed with React 17 JSX Transform
    'react/prop-types': 'off', // Not needed in TypeScript files
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Consider enabling for better type inference
    'import/no-unresolved': 'error', // Ensures an imported module can be resolved to a module on the local filesystem
    'no-unused-vars': 'off', // Handled by @typescript-eslint/no-unused-vars
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignore unused variables starting with _
    'jsx-a11y/accessible-emoji': 'off', // Consider your project's accessibility needs
  },
  overrides: [
    {
      files: ['**/*.tsx'], // Target only TypeScript React files
      rules: {
        'react/prop-types': 'off', // Disable prop-types rule for TypeScript files as types are checked by TypeScript
      },
    },
  ],
};
