module.exports = {
  extends: ['airbnb'],
  overrides: [{
    env: { jest: true },
    files: ['*.spec.js?(x)', '**/__test__/**', '*.spec.ts?(x)'],
    rules: {
      'import/no-extraneous-dependencies': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/prop-types': 'off'
    }
  }, {
    files: ['.storybook/**', '**/stories/**'],
    rules: {
      'import/no-extraneous-dependencies': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/prop-types': 'off'
    }
  }, {
    files: ['.moduleBuilder'],
    rules: {
      camelcase: 'off',
      'import/no-unresolved': 'off',
      'import/no-webpack-loader-syntax': 'off',
      'react/jsx-filename-extension': 'off'
    }
  }, {
    extends: ['plugin:@typescript-eslint/recommended'],
    files: ['**/*.ts?(x)', '**/*.d.ts?(x)'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-shadow': ['error'],
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/no-use-before-define': ['error'],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          '.d.ts': 'never',
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never'
        }
      ],
      'no-shadow': 'off',
      // per https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
      'no-undef': 'off',

      'no-unused-vars': 'off',

      'no-use-before-define': 'off',

      'react/jsx-filename-extension': [
        1, { extensions: ['.js', '.jsx', '.tsx'] }
      ]
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts']
        }
      }
    }
  }],
  plugins: ['react-hooks', 'sort-keys-fix', 'sort-destructure-keys'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'func-names': ['warn', 'as-needed'],
    'func-style': 'off',
    'no-nested-ternary': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys-fix/sort-keys-fix': 'error'
  }
};
