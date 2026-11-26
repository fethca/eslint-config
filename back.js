import js from '@eslint/js'
import vitest from '@vitest/eslint-plugin'
import { defineConfig, globalIgnores } from 'eslint/config'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import { importX } from 'eslint-plugin-import-x'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig(
  globalIgnores(['dist', 'coverage']),
  js.configs.recommended,
  importX.flatConfigs.recommended,
  {
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      'require-await': 'warn',
      'no-unused-vars': 'off',
      'import-x/first': 'warn',
      'import-x/order': ['warn', { groups: [['builtin', 'external'], 'index', 'parent', 'sibling'] }],
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [tseslint.configs.recommended, importX.flatConfigs.typescript],
    languageOptions: {
      parserOptions: { projectService: true },
    },
    settings: {
      'import-x/resolver-next': [createTypeScriptImportResolver()],
    },
    rules: {
      '@typescript-eslint/await-thenable': 'warn',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/return-await': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    },
  },
  {
    files: ['**/*.test.*'],
    extends: [vitest.configs.recommended],
    languageOptions: { globals: vitest.environments.env.globals },
  },
)
