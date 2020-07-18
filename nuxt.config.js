import colors from 'vuetify/es5/util/colors'
const path = require('path')
import FMMode from "frontmatter-markdown-loader/mode";
import MarkdownIt from 'markdown-it'
import mip from 'markdown-it-prism'

const md = new MarkdownIt({
  html: true,
  typographer: true
})
md.use(mip)

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: "description", property: "og:description", content: 'Área de aprendizaje colaborativo de informática', hid: "description" },
      { property: 'og:image', content:'/icon.png', hid: "og:image" },
      { name: 'twitter:site', content: '@donEber98', hid: "twitter:site" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /* PWA*/
  pwa: {
    meta: {
      title: 'Enfocate',
      author: 'donEber',
    },
    manifest: {
      name: 'Enfocate',
      short_name: 'Enfocate',
      lang: 'es',
    },
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/prism-material-light.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
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

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extend (config){
      config.module.rules.push(
        {
          test: /\.md$/,
          loader: "frontmatter-markdown-loader",
          options: {
            mode: [FMMode.VUE_COMPONENT],
            vue: {
              root: "dynamicMarkdown"
            },
            markdown(body) {
              return md.render(body)
            }
          }
        }
      )
    },
  }
}
