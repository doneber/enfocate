<template>
  <div>
    <drawer :drawer="drawer" :items="items" />
    <v-app-bar app clipped-left dense elevation="1" height="56" dark color="primaryDark">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-img max-width="35px" class="mr-2" src="/icon.png" @click="goHome()" />
      <v-toolbar-title
        class="align-center"
        style="font-weight: bold; font-size : 1.65em;"
        @click="goHome()"
        :class="[!showSearcher?'':'hidden-xs-only']"
      >Enfocate</v-toolbar-title>
      <v-spacer class="hidden-xs-only" />
      <searcher />
      <v-spacer class="hidden-sm-and-up" />
      <v-icon @click="mostrarBuscador()">mdi-magnify</v-icon>
      <v-spacer class="hidden-xs-only" />
      <v-btn icon to="/" v-if="!inHome" :class="[!showSearcher?'':'hidden-xs-only']">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn :class="[!showSearcher?'':'hidden-xs-only']" @click="cambiarModo()" icon>
        <v-icon>{{ modoDark?'mdi-white-balance-sunny':'mdi-brightness-4'}}</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
import searcher from '@/components/Searcher'
import drawer from '@/components/Drawer'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data: () => ({
    textoBuscador: "",
    showSearcher: false,
    drawer: false,
    inHome: null,
    modoDark: true,
    items: { baseEndPoint:''},
  }),
  components:{
    searcher, drawer
  },
  computed: {
    ...mapState(['allItems']),

    searcFinded() {
      let auxItems = ['']
      for (let i in this.allItems) {
        // auxItems.concat(this.allItems[i]["items"])
        console.log(this.allItems[i].items);
        auxItems.concat(this.allItems[i].items)
      }
      console.log(auxItems);
      return this.allItems["poo"]["items"]
        .concat(this.allItems["android"]["items"])
        .concat(this.allItems["edatos"]["items"])
        .concat(this.allItems["pestructurada"]["items"])
        .concat(this.allItems["poo2"]["items"])
        .filter(
          (item) =>
            this.LevenshteinDistance(
              item.title.toUpperCase(),
              this.textoBuscador.toUpperCase()
            ) < 3 ||
            item.title.toUpperCase().includes(this.textoBuscador.toUpperCase())
        );
    },
  },
  methods: {
    ...mapActions(["getCourses"]),
    LevenshteinDistance: function (a, b) {
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
    calculaDrawer(url) {
      if (url == "/") this.items = this.allItems["home"];
      else if (url.includes("/edatos", 0)) this.items = this.allItems["edatos"];
      else if (url.includes("/pestructurada", 0)) this.items = this.allItems["pestructurada"];
      else if (url.includes("/poo2", 0)) this.items = this.allItems["poo2"];
      else if (url.includes("/poo", 0)) this.items = this.allItems["poo"];
      else if (url.includes("/android", 0))
        this.items = this.allItems["android"];
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
    cambiarModo() {
      this.modoDark = !this.modoDark;
    },
  },
  updated() {
    this.$vuetify.theme.dark = this.modoDark;
  },
  async created() {
    await this.getCourses() //getCourses from state
    this.inHome = this.$router.currentRoute.path == "/" ? true : false;
    this.calculaDrawer(this.$router.currentRoute.path);
    if (this.$vuetify.breakpoint.xs) {
      this.drawer = false;
    }
  },
  mounted() {},
  watch: {
    $route(to, from) {
      let url = this.$router.currentRoute.path;
      if (url == "/") this.inHome = true;
      else this.inHome = false;
      this.calculaDrawer(url);
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
