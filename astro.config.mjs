import { defineConfig } from 'astro/config'
import astroI18next from 'astro-i18next'

const baseUrl = process?.env?.PUBLIC_BASE_URL || '/'
console.log('baseUrl', baseUrl)
console.log('process.env', process?.env)

export default defineConfig({
  integrations: [astroI18next()],
  base: baseUrl,
})
