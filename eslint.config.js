import js from '@eslint/js';
import globals from 'globals';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import checkFile from 'eslint-plugin-check-file';
import reactX from 'eslint-plugin-react-x';

export default tseslint.config([
  tseslint.config({
    ignores: ['dist', 'node_modules', '.vscode', '*.json', '*.lock'],
  }),
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      reactX.configs['recommended-typescript'],
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react-refresh': reactRefresh,
      'check-file': checkFile,
      prettier,
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': 'warn',

      // File name must be PascalCase
      'check-file/filename-naming-convention': [
        'error',
        {
          '**/*.{tsx}': 'PASCAL_CASE',
          '**/*.{ts}': 'CAMEL_CASE'
        },
      ],

      // Folder naming convention must be kebab-case
      'check-file/folder-naming-convention': [
        'error',
        {
          '**/': 'KEBAB_CASE',
        },
      ],

      // Disable fallback rules that duplicate TS-aware versions
      'no-unused-vars': 'off',
    },
  },
  {
    files: ['**/index.{tsx,ts}', '**/main.tsx', '**/*.config.{ts,json}', '**/*.json'],
    rules: {
      'check-file/filename-naming-convention': 'off',
    },
  },
]);
