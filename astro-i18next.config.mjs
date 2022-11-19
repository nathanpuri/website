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
      about: 'about',
      contact: 'contact',
      ['mahayana-context']: 'mahayana-context',
      ['mahayana-in-daily-life']: 'mahayana-in-daily-life',
      path: 'path',
      submit_success: 'submit_success',
      teachings: 'teachings',
    },
    pt: {
      about: 'cerca-de',
      contact: 'contato',
      ['mahayana-context']: 'contexto-mahayana',
      ['mahayana-in-daily-life']: 'mahayana-na-vida-cotidiana',
      path: 'caminho',
      submit_success: 'enviar_sucesso',
      teachings: 'ensinamentos',
    },
  },
}
