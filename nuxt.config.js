// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],

  content: {
    watch: {
      ws: {
        hostname: 'localhost'
      }
    }
  },

  devtools: { 
    enabled: true,
    vscode: {},
  },

  gtm: {
    id: 'GTM-5KGDNJCD',
  },

  headlessui: {
    prefix: 'Headless' // Change the default component prefix
  },

  image: {
    provider: 'netlify',
    domains: ['cdn.shopify.com'],
    netlify: {
      baseURL: '',
    },
  },

  modules: [
    'nuxt-icon',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-headlessui',
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
    '@zadigetvoltaire/nuxt-gtm',
    '@pinia-plugin-persistedstate/nuxt',
  ],

  nitro: {
    prerender: {
      // enabled by default with nuxt generate, not required
      crawlLinks: true,
      // add any routes to prerender
      routes: ['/']
    }
  },

  runtimeConfig: {
    public: {
      gtm: {
        id: 'GTM-5KGDNJCD',
      }
    }
  },

  // pinia: {
  //   storesDirs: ['./stores/**'],
  // },

  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'localStorage'
  },
  
  plugins: [
    '~/plugins/shopify.js',
  ],

  runtimeConfig: {
    shopifyHost: process.env.NUXT_SHOPIFY_STOREFRONT_HOST,
    shopifyAccessToken: process.env.NUXT_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  },

  site: {
    // indexable: false,
    url: 'https://heyharmon.com',
    name: 'Studio Harmon | Software engineering and award-winning design',
    description: 'Change the game by building software and branding that puts a real moat between you and the competition.',
    defaultLocale: 'en',
  },

  sitemap: {
    hostname: 'https://heyharmon.com',
  },

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
})