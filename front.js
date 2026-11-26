import react from '@eslint-react/eslint-plugin'
import { defineConfig } from 'eslint/config'
import jestDom from 'eslint-plugin-jest-dom'
import reactHooks from 'eslint-plugin-react-hooks'
import testingLibrary from 'eslint-plugin-testing-library'
import globals from 'globals'
import back from './back.js'

export default defineConfig(
  back,
  {
    files: ['**/*.{ts,tsx}'],
    extends: [react.configs['recommended-typescript'], reactHooks.configs.flat.recommended],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['**/*.test.*'],
    extends: [jestDom.configs['flat/recommended'], testingLibrary.configs['flat/react']],
  },
)
