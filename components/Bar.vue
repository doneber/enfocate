<template lang="pug">
  div
    v-app-bar(app='' clipped-left='' dense='' elevation='1' height='56' :dark='darkModeTheme' color='appBarColor')
      v-app-bar-nav-icon(v-if="displayDrawerIcon" @click='setDrawer') 
        v-icon {{ inPage?'mdi-menu':(drawer?'mdi-chevron-left':'mdi-chevron-right')}}
      v-img.mr-2.mb-1.mt-1(max-width='45px' src='/icon.png' @click='goHome()' style='cursor: pointer;')
      //- v-toolbar-title.align-center(style='font-weight: bold; font-size : 1.65em; cursor: pointer;' @click='goHome()' :class="[!showSearcher?'':'hidden-xs-only']")
      img(height="28" src='/logo.svg' @click='goHome()' style='cursor: pointer;' :class="[!showSearcher?'':'hidden-xs-only', !darkModeTheme?'invert':'']")
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
      v-btn(:class="[!showSearcher?'':'hidden-xs-only']" @click='changeTheme()' icon='')
        v-icon {{ darkModeTheme?'mdi-white-balance-sunny':'mdi-weather-night'}}
</template>
<script>
import Drawer from '@/components/Drawer'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data: () => ({
    darkModeTheme: false,
    textoBuscador: "",
    showSearcher: false,
    inPage: null,
    items: { baseEndPoint: '' },
    displayDrawerIcon: false,
  }),
  components: {
    Drawer
  },
  computed: {
    ...mapState(['courses', 'cardCourses', 'drawer']),
    searchFinded() {
      /* SearchFinded searches the input-text from the COURSES in store*/
      // let auxItems = []
      // for (let i in this.courses)
      //   auxItems = auxItems.concat(this.courses[i].items)
      let auxItems = this.cardCourses
      auxItems = auxItems.filter(
        (item) =>
          this.LevenshteinDistance(
            item.title.toUpperCase().substr(0, this.textoBuscador.length),
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
    changeTheme() {
      this.darkModeTheme = !this.darkModeTheme
      this.$vuetify.theme.dark = this.darkModeTheme;
      // localStorage.setItem('themeColor',this.darkModeTheme)
    },
  },
  async created() {
    this.$vuetify.theme.dark = this.darkModeTheme
    this.inPage = ['/', '/nosotros', '/comunidad', '/contacto'].includes(this.$router.currentRoute.path)
    await this.getCardCourses()
    // check localStorage
    // const savedThemeColor = localStorage.getItem('themeColor')
    // if (savedThemeColor) 
    //   this.darkModeTheme=parseInt(savedThemeColor)
    // this.changeTheme(this.darkModeTheme)
    //
    const currentPath = this.$router.currentRoute.path
    this.displayDrawerIcon = currentPath.split('/').length > 2
  },
  watch: {
    $route(to) {
      this.inPage = ['/', '/nosotros', '/comunidad', '/contacto'].includes(to.path)
      this.displayDrawerIcon = to.path.split('/').length > 2
    },
  },
};
</script>
<style scoped>
.invert {
  filter: invert(.8);
}

.padre {
  position: relative;
}

.hijo {
  position: absolute;
  margin: 0;
}
</style>