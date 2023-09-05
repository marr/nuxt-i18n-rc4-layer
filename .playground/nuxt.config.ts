export default defineNuxtConfig({
  extends: '..',
  i18n: {
    langDir: 'locales',
    locales: [
      { code: 'en', file: 'en.ts'}
    ]
  }
})
