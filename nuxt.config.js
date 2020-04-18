import { start, stop, status } from './api'

export default {
  head: {
    title: 'みーてぃんぐなう',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: false,
  buildModules: ['@nuxtjs/vuetify'],
  modules: ['@nuxtjs/axios'],
  serverMiddleware: [
    { path: '/start', handler: start },
    { path: '/stop', handler: stop },
    { path: '/status', handler: status },
  ],
}
