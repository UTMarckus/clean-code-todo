import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  {
    languageOptions: {
      globals: globals.browser,
    },
    files: ['**/*.js'],
    plugins: {
      js,
    },
    extends: [
      'js/recommended',
      {
        rules: {
          'no-unused-vars': 'warn',
          'no-undef': 'warn',
          'no-var': 'warn',
          'prefer-const': 'warn',
          'no-console': 'warn',
        },
      },
      eslintConfigPrettier,
    ],
  },
]);
