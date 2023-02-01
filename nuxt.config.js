import colors from 'vuetify/es5/util/colors'
const path = require('path')
const fs = require('fs')
import FMMode from "frontmatter-markdown-loader/mode";
import MarkdownIt from 'markdown-it'
import mip from 'markdown-it-prism'

function getMDPaths(type) {
  const directories = fs.readdirSync(path.resolve(__dirname, 'contents'));
  const res = []
  directories.forEach(directoryName => {
    const files = fs.readdirSync(path.resolve(__dirname, 'contents', directoryName));
    res.push(directoryName)
    files.forEach(fileName => res.push(`${directoryName}/${path.parse(fileName).name}`))
  })
  return res
}
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
    '@/assets/css/prism-material-light.css',
    '@/assets/css/md-styles.css',
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
      options: { customProperties: true },
      themes: {
        dark: {
          primaryMiddle: '#272829',
          primaryDark: '#212121',
          appBarColor: '#212121',
          background: '#212121',
        },
        light: {
          primaryMiddle: '#fff',
          primaryDark: '#fff',
          appBarColor: '#fff',
          background: '#ECEFF1',
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
          loader: 'frontmatter-markdown-loader',
          include: path.resolve(__dirname, 'contents'),
          options: {
            mode: [FMMode.VUE_RENDER_FUNCTIONS, FMMode.VUE_COMPONENT],
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
  },
  generate: {
    routes: ['404']
      .concat(getMDPaths())
  }
}
