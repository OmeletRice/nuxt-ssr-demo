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
    },

    // extend (config, {}) {
    //   const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
    //   if (vueLoader) {
    //     vueLoader.options.loaders.sass = 'vue-style-loader!css-loader!sass-loader'
    //   }
    // }
    // webpack loader
    loaders: [
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader!style-loader!css-loader!sass-loader'
        ]
      }
    ],

    babel: {
      // presets: [["es2015", { "modules": false }]],
      // plugins: [
      //   [
      //     "component",
      //     {
      //       "libraryName": "element-ui",
      //       "styleLibraryName": "theme-chalk"
      //     }
      //   ],
      //   'transform-async-to-generator',
      //   'transform-runtime'
      // ]
    }
  },

  postcss: [
    require('autoprefixer')({
      browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4']
    })
  ],

  vendor: [
    'axios',
    'element-ui'
  ],

  css: [
    'normalize.css',
    {
      src: '~/assets/scss/index.scss',
      lang: 'sass'
    }
  ],

  plugins: [
    {
      src: '~/plugins/element-ui.js',
      ssr: true
    }
  ],

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
