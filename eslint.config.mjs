import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
})

export default [
  ...compat.extends('@rocketseat/eslint-config/react'),
  {
    plugins: {
      'simple-import-sort': simpleImportSort, // Adiciona o plugin
    },
    rules: {
      // Regras recomendadas pelo plugin
      'simple-import-sort/imports': 'error',
    },
  },
]
