// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src',
  modules: [
    'nuxt-vitest',
    '@nuxtjs/i18n'
  ],
  i18n: {
    langDir: 'lang',
    locales: [
      { code: 'en', file: 'en.json'}
    ]
  }
})
