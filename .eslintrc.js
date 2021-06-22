module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'arrow-body-style': 0,
    'arrow-parens': ['error', 'as-needed'],
    'implicit-arrow-linebreak': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'no-confusing-arrow': ['error', { allowParens: true }],
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': [0, { allow: 'single-child' }],
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': [1, { ignore: ['children'] }],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
  },
};
