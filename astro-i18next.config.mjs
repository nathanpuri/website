export default {
  defaultLocale: 'en',
  locales: ['en', 'pt'],
  /**
   * Netlify CMS saves new markdown files to pages/en/ & pages/pt/ directories.
   * And the Nav component loads from these directories when generating paths.
   * So adding the locale prefix for the default locale, which this setting
   * enables, ensures navbar links work correctly.
   */
  showDefaultLocale: true,
  routes: {
    en: {
      contact: 'contact',
      submit_success: 'submit_success',
    },
    pt: {
      contact: 'contato',
      submit_success: 'enviar_sucesso',
    },
  },
}
