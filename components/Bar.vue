<template lang="pug">
  div
    v-app-bar(app='' clipped-left='' dense='' elevation='1' height='56' dark='' color='primaryDark')
      v-app-bar-nav-icon(@click='setDrawer') 
        v-icon {{ inPage?'mdi-menu':(drawer?'mdi-chevron-left':'mdi-chevron-right')}}
      v-img.mr-2.mb-1(max-width='45px' src='/icon.png' @click='goHome()' style='cursor: pointer;')
      v-toolbar-title.align-center(style='font-weight: bold; font-size : 1.65em; cursor: pointer;' @click='goHome()' :class="[!showSearcher?'':'hidden-xs-only']") Enfocate
      v-spacer.hidden-xs-only
      .padre
        v-text-field(clearable='' :class="[showSearcher?'':'hidden-xs-only']" placeholder='Buscar' @blur='ocultarBuscador' hide-details='' :autofocus='showSearcher' v-model='textoBuscador')
        v-card.hijo(:light='!this.$vuetify.theme.dark?true:false' color='primaryMiddle' v-click-outside='ocultarTodoElBuscador' v-if='textoBuscador' ma-0='' pa-0='' elevation='6' width='100%')
          v-list(color='primaryMiddle')
            v-list-item(v-for='(item,index) in searchFinded' :key='index' :to='item.baseEndPoint' @click='ocultarTodoElBuscador()')
              v-list-item-content
                v-list-item-title(v-text='item.title') {{ item.title }}
      v-spacer.hidden-sm-and-up
      v-icon(@click='mostrarBuscador()') mdi-magnify
      v-spacer.hidden-xs-only
      v-btn(icon='' to='/' v-if='!inHome' :class="[!showSearcher?'':'hidden-xs-only']")
        v-icon mdi-home
      v-btn(:class="[!showSearcher?'':'hidden-xs-only']" @click='changeThemeIcon()' icon='')
        v-icon {{ indexTheme===0?'mdi-brightness-4':indexTheme===1?'mdi-white-balance-sunny':'mdi-weather-night'}}
</template>
<script>
import Drawer from '@/components/Drawer'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data: () => ({
    darkThemes: [true, null, false],
    indexTheme: 1,
    textoBuscador: "",
    showSearcher: false,
    inHome: null,
    inPage: null,
    items: { baseEndPoint:''},
  }),
  components:{
    Drawer
  },
  computed: {
    ...mapState(['courses', 'cardCourses','drawer']),

    searchFinded() {
      /* SearchFinded searches the input-text from the COURSES in store*/
      // let auxItems = []
      // for (let i in this.courses)
      //   auxItems = auxItems.concat(this.courses[i].items)
      let auxItems = this.cardCourses
      auxItems = auxItems.filter(
          (item) =>
            this.LevenshteinDistance(
              item.title.toUpperCase().substr(0,this.textoBuscador.length),
              this.textoBuscador.toUpperCase()
            ) < 3 ||
            item.title.toUpperCase().includes(this.textoBuscador.toUpperCase())
        )
      return auxItems
    },
  },
  methods: {
    ...mapMutations(["setDrawer"]),
    ...mapActions(['getCardCourses']),
    LevenshteinDistance: function (a, b) {
      /* Calculates the distance beetween two Strings */
      if (a.length == 0) return b.length;
      if (b.length == 0) return a.length;
      let matrix = [];
      let i;
      for (i = 0; i <= b.length; i++) {
        matrix[i] = [i];
      }
      let j;
      for (j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
      }
      for (i = 1; i <= b.length; i++) {
        for (j = 1; j <= a.length; j++) {
          if (b.charAt(i - 1) == a.charAt(j - 1)) {
            matrix[i][j] = matrix[i - 1][j - 1];
          } else {
            matrix[i][j] = Math.min(
              matrix[i - 1][j - 1] + 1,
              Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
            );
          }
        }
      }

      return matrix[b.length][a.length];
    },
    goHome() {
      this.$router.push("/");
    },
    mostrarBuscador() {
      this.showSearcher = true;
    },
    ocultarBuscador() {
      if (this.textoBuscador == "") this.showSearcher = false;
    },
    ocultarTodoElBuscador() {
      this.showSearcher = false;
      this.textoBuscador = "";
    },
    changeThemeIcon() {
      this.indexTheme++
      this.indexTheme %= this.darkThemes.length //
      this.changeTheme(this.indexTheme)
      localStorage.setItem('themeColor',this.indexTheme)
    },
    changeTheme(index){
      if(index==0){
        this.$vuetify.theme.themes.dark.primaryMiddle = '#272829'
        this.$vuetify.theme.themes.dark.primaryDark = '#212121'
        this.$vuetify.theme.themes.dark.primaryLight = '#2f2f2f'
        this.$vuetify.theme.themes.dark.background = '#212121'
        this.$vuetify.theme.dark = true;
      }
      else if(index==1){
        this.$vuetify.theme.themes.dark.primaryMiddle = '#263238'
        this.$vuetify.theme.themes.dark.primaryDark = '#263238'
        this.$vuetify.theme.themes.dark.primaryLight = '#37474F'
        this.$vuetify.theme.themes.dark.background = '#2c3940'
        this.$vuetify.theme.dark = true;
      }else{
          // primary: '#212121',
          // primaryMiddle: '#ECEFF1',
          // primaryDark: '#455A64',
          // primaryLight: '#475b65',
        this.$vuetify.theme.dark = false;
      }
    }
  },
  async created() {
    this.inHome = this.$router.currentRoute.path === '/'
    this.inPage = ['/','/nosotros','/comunidad','/contacto'].includes(this.$router.currentRoute.path)
    await this.getCardCourses()
    // check localStorage
    const savedThemeColor = localStorage.getItem('themeColor')
    if (savedThemeColor) 
      this.indexTheme=parseInt(savedThemeColor)
    this.changeTheme(this.indexTheme)
  },
  watch: {
    $route(to, from) {
      this.inHome = to.path === '/'
      this.inPage = ['/','/nosotros','/comunidad','/contacto'].includes(to.path)
    },
  },
};
</script>
<style scoped>
.padre {
  position: relative;
}
.hijo {
  position: absolute;
  margin: 0;
}
</style>