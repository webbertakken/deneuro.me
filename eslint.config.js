import tsEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import nextPlugin from '@next/eslint-plugin-next'
import functionalPlugin from 'eslint-plugin-functional';

export default [
  {
    ignores: ['**/node_modules/**', '.next/**', 'dist/**', 'src-tauri/**', '.yarn/**']
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@next/next': nextPlugin,
      '@typescript-eslint': tsEslint,
      // functional: functionalPlugin,
      'jsx-a11y': jsxA11yPlugin
    },
    rules: {
      // ...functionalPlugin.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      ...tsEslint.configs.recommended.rules,
      ...tsEslint.configs['strict-type-checked'].rules,
      ...tsEslint.configs['stylistic-type-checked'].rules,
      '@next/next/no-img-element': 'error',
      eqeqeq: 'error',
      'no-else-return': 'error',
      'no-implicit-coercion': ['error', { disallowTemplateShorthand: true }],
      'no-unneeded-ternary': 'error',
      'no-useless-call': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      // Bugged: TypeError: context.getAncestors is not a function
      "@next/next/no-duplicate-head": 'off',
      // Bugged: TypeError: context.getScope is not a function
      'react-hooks/rules-of-hooks': 'off',
      'prefer-const': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      radix: ['error', 'always'],
      'react-hooks/exhaustive-deps': 'error',
      '@typescript-eslint/no-confusing-void-expression': 'off',
      '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }]
    },
  },
]
