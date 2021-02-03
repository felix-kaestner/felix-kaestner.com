export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Felix Kästner',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content:
          'Felix Kästner. A software developer specialized in mobile and ubiquitous computing.',
      },
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/nuxt-community/google-fonts-module
    '@nuxtjs/google-fonts',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    // https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // PWA Configuration (https://pwa.nuxtjs.org/setup)
  pwa: {
    meta: {
      title: 'Felix Kästner',
      author: 'Felix Kästner',
      theme_color: '#03a9f4',
    },
  },

  // https://github.com/nuxt-community/google-fonts-module
  googleFonts: {
    families: {
      Montserrat: [100, 300],
    },
    display: 'swap',
  },
}
