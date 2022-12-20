module.exports = {
    env: {
      browser: true,
      es2021: true
    },
    extends: [
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'airbnb-typescript'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json'
    },
    plugins: ['prettier', '@typescript-eslint'],
    extends: [
      'airbnb-typescript',
      'react-app',
      'airbnb',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'plugin:jsx-a11y/recommended',
    ],
    settings: {
      'import/resolver': {
        'eslint-import-resolver-custom-alias': {
          alias: {
            '@core': './src/core',
            '@domain': './src/domain',
            '@infra': './src/infra',
            '@main': './src/main',
            '@presentation': './src/presentation'
          },
          extensions: ['.ts', '.tsx', '.css', '.scss']
        }
      }
    },
    env: {
      node: true,
      browser: true
    },
    rules: {
      "prettier/prettier": ["error"],  
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'none'
        }
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      'no-underscore-dangle': 'off',
      'no-unused-vars': 'off',
      'react/react-in-jsx-scope': 'off',
      'import/prefer-default-export': 'off',
      'react/jsx-filename-extension': 'off',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      'react/jsx-props-no-spreading': 'off',
      'implict-arrow-linebreak': 0,
      'semi': 0,
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never'
        }
      ],
      'comma-dangle': ['error', 'never'],
      'react/jsx-one-expression-per-line': 'off',
      'react/function-component-definition': 'off',
      'import/prefer-default-export': 'off',
      'arrow-body-style': 1,
      'object-curly-newline': 'off',
      indent: 'off',
      '@typescript-eslint/indent': ['off'],
      quotes: 'off',
      'class-methods-use-this': 'off',
      'no-shadow': 'off',
      'no-useless-constructor': 'off',
      '@typescript-eslint/semi': 'off',
      'import/no-extraneous-dependencies': 'warn',
      'no-useless-constructor': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      "react/prop-types": "off",
      "react/require-default-props": "off"
    },
    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        typescript: {},
        'eslint-import-resolver-custom-alias': {
          alias: {
            '@core': './src/core',
            '@domain': './src/domain',
            '@infra': './src/infra',
            '@main': './src/main',
            '@presentation': './src/presentation'
          },
          extensions: ['.ts', '.tsx', '.css', '.scss']
        }
      }
    }
  }
  