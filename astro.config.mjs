import { defineConfig } from 'astro/config'
import astroI18next from 'astro-i18next'

const site = process?.env?.PUBLIC_BASE_URL || '/'
console.log('site', site)
console.log('process.env', process?.env)

export default defineConfig({
  integrations: [astroI18next()],
  site,
})
