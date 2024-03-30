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
      ['direct-introduction-rigpa']: 'direct-introduction-rigpa',
      instructions: 'instructions',
      ['mahayana-context']: 'mahayana-context',
      ['mahayana-in-daily-life']: 'mahayana-in-daily-life',
      path: 'path',
      submit_success: 'submit_success',
      teachings: 'teachings',
      ['when-to-receive-teachings']: 'when-to-receive-teachings',
    },
    pt: {
      about: 'cerca-de',
      contact: 'contato',
      ['direct-introduction-rigpa']: 'introducao-direta-rigpa',
      instructions: 'instrucoes',
      ['mahayana-context']: 'contexto-mahayana',
      ['mahayana-in-daily-life']: 'mahayana-na-vida-cotidiana',
      path: 'caminho',
      submit_success: 'enviar_sucesso',
      teachings: 'ensinamentos',
      ['when-to-receive-teachings']: 'quando-receber-ensinamentos',
    },
  },
}
