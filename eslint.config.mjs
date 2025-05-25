import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import path from 'node:path';
import sortExports from 'eslint-plugin-sort-exports';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const config = [
  {
    ignores: [
      '**/personly-web/**/src/resources/**/*',
      '**/personly-web/**/build/**/*',
      '**/node_modules/**/*',
      '**/build/**/*',
      '**/dist/**/*',
    ],
  },
  ...compat.extends(
    'eslint:recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
    'next',
    'prettier'
  ),
  {
    plugins: {
      'sort-exports': sortExports,
    },

    languageOptions: {
      globals: {},
    },

    settings: {
      next: {
        rootDir: './personly-web/**/src',
      },
    },

    rules: {
      'prettier/prettier': [
        'error',
        {
          trailingComma: 'es5',
          singleQuote: true,
        },
      ],

      'promise/catch-or-return': [
        'error',
        {
          terminationMethod: ['finally'],
        },
      ],

      '@next/next/no-html-link-for-pages': 'off',

      'sort-imports': [
        'error',
        {
          allowSeparatedGroups: true,
        },
      ],

      'sort-exports/sort-exports': [
        'error',
        {
          sortDir: 'asc',
        },
      ],
    },
  },
];

export default config;
