// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Use src/ as the source directory
  srcDir: 'src',

  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  components: {
    path: '~/components',
    pathPrefix: false,
  },

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
  ],

  app: {
    head: {
      title: '迪恩 - Independent Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '独立开发者迪恩 - INFJ | 数字游民梦想 | 把奇思妙想变成现实' },
        { name: 'keywords', content: '独立开发者, 全栈开发, INFJ, 数字游民, 个人博客' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'zh_CN' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
    },
    // Disable database to avoid SQLite issues
    database: false,
  },

  tailwindcss: {
    cssPath: '~/assets/styles/main.css',
  },

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },

  nitro: {
    experimental: {
      openAPI: true,
    },
  },
})
