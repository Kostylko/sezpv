import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'СПЕЦИАЛЬНАЯ ЭКОНОМИЧЕСКАЯ ЗОНА “ПАВЛОДАР”',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: "msapplication-TileColor",
        content: "#da532c"
      },
      {
        name: "theme-color",
        content: "#ffffff"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }
    ],
    noscript: [
      {
        src: "https://mc.yandex.ru/watch/87386425",
        style: "position: absolute; left: -9999px",
      }
    ],
    script: [
      {
        async: true,
        src: "https://mc.yandex.ru/watch/87386425",
      },
      {
        async: true,
        src: "//code-ya.jivosite.com/widget/QKjnGlmmT4",
      },
      {
        type: 'text/javascript',
        innerHTML: "(function (m, e, t, r, i, k, a) {" +
            "m[i] ="+
              "m[i] ||"+
              "function () {"+
                "(m[i].a = m[i].a || []).push(arguments);"+
              "};"+
            "m[i].l = 1 * new Date();"+
            "(k = e.createElement(t)),"+
              "(a = e.getElementsByTagName(t)[0]),"+
              "(k.async = 1),"+
              "(k.src = r),"+
              "a.parentNode.insertBefore(k, a);"+
          "})("+
            "window,"+
            "document,"+
            "\`script\`,"+
            "\`https://mc.yandex.ru/metrika/tag.js\`,"+
            "\`ym\`"+
          ");"+
""+
          "ym(87386425, \`init\`, {"+
            "clickmap: true,"+
            "trackLinks: true,"+
            "accurateTrackBounce: true,"+
            "webvisor: true,"+
          "});"
      },

    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/main.scss",
    "swiper/swiper-bundle.css",
    "~/assets/css/fonts.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/swiper.js", mode: "client", ssr: true },
    { src: '~/plugins/v-mask.js', mode: "client", ssr: true },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', 'vue-scrollto/nuxt', "@nuxtjs/i18n", ['vue-scrollto/nuxt', { duration: 300 }],],
  axios: {
    baseURL: 'https://api.sezpv.com/api/',
  },

  i18n: {
    locales: ["ru", "en", "kz"],
    defaultLocale: "ru",
    vueI18nLoader: true,
    vueI18n: {
      fallbackLocale: "ru",
      silentTranslationWarn: true,
      silentFallbackWarn: true
    },
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: 'root',
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
