module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'coreui-free-nuxt-admin-template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'node_modules/font-awesome/scss/font-awesome.scss',
    'node_modules/simple-line-icons/scss/simple-line-icons.scss',
    'node_modules/flag-icon-css/css/flag-icon.min.css',
    'node_modules/bootstrap-vue/dist/bootstrap-vue.css',
    { src: '~assets/scss/style.scss', lang: 'scss' },
  ],
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
    vendor: [
      'vue-perfect-scrollbar'
    ]
  },
  plugins: [
    '~/plugins/vue-chartjs',
    {
      src: '~/plugins/vue-perfect-scrollbar',
      ssr: false
    }
  ]
}

