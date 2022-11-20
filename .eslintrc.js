module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'react-app',
    'react-app/jest'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/no-set-state': 'off',
    'max-lines-per-function': [1, 100],
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'react/prop-types': 'off'
  }
}
