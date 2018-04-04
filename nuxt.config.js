module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-ssr-demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  // plugins: [
  // ],

  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    proxy: true
  },

  proxy: {
    '/app': {
      target: 'https://banner-storage-ms.juejin.im/v1/get_banner?src=web&pageSize=1',
      pathRewrite: {
        '^/app': ''
      }
    }
  }
}
