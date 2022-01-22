module.exports = {
  extends: ['airbnb'],
  plugins: ['react-hooks', 'sort-keys-fix', 'sort-destructure-keys'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'func-names': ['warn', 'as-needed'],
    'func-style': 'off',
    'no-nested-ternary': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys-fix/sort-keys-fix': 'error'
  }
};
