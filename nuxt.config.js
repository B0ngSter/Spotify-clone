const version = 2
export default {
  server: {
    host: process.env.ENV === 'local' ? '127.0.0.1' : '0.0.0.0',
    port: 3000
  },
  target: 'static',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-green-logo-8.png' }],
    script: [
      { hid: 'stripe', src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js', defer: true },
      { hid: 'stripe', src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', defer: true },
    ]
  },
  loading: false,
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  services: {
    auth: true,
    firestore: true,
    functions: true,
    storage: true,
    realtimeDb: true,
    messaging: true,
    performance: true,
    analytics: true,
    remoteConfig: true
  },
  modules: [
    [
      'bootstrap-vue/nuxt',
      {
        icons: true
      }
    ],
    '@nuxtjs/axios'
  ],
  build: {
    transpile: [/^vue2-google-maps($|\/)/],
    extractCSS: true,
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : 'app.[contenthash]' + version + '.js',
      chunk: ({ isDev }) => isDev ? '[name].js' : 'app.[contenthash]' + version + '.js',
      css: ({ isDev }) => isDev ? '[name].css' : 'app.[contenthash]' + version + '.css',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7]' + version + '.[ext]',
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7]' + version + '.[ext]',
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7]' + version + '.[ext]'
    }
  }
}
