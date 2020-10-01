<template>
  <div>
    <v-app-bar app clipped-left dense elevation="1" height="56" dark color="primaryDark">
      <v-app-bar-nav-icon @click="setDrawer" />
      <v-img max-width="35px" class="mr-2" src="/icon.png" @click="goHome()" />
      <v-toolbar-title
        class="align-center"
        style="font-weight: bold; font-size : 1.65em;"
        @click="goHome()"
        :class="[!showSearcher?'':'hidden-xs-only']"
      >Enfocate</v-toolbar-title>
      <v-spacer class="hidden-xs-only" />
        <div class="padre">
        <v-text-field
          clearable
          :class="[showSearcher?'':'hidden-xs-only']"
          placeholder="Buscar"
          @blur="ocultarBuscador"
          hide-details
          :autofocus="showSearcher"
          v-model="textoBuscador"
        />
        <v-card
          :light="!this.$vuetify.theme.dark?true:false"
          color="primaryMiddle"
          v-click-outside="ocultarTodoElBuscador"
          v-if="textoBuscador"
          class="hijo"
          ma-0
          pa-0
          elevation="6"
          width="100%"
        >
          <v-list color="primaryMiddle">
            <v-list-item
              v-for="(item,index) in searchFinded"
              :key="index"
              :to="item.to"
              @click="ocultarTodoElBuscador()"
            >
              <v-list-item-content>
                <v-list-item-title v-text="item.title">{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </div>
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
import drawer from '@/components/Drawer'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data: () => ({
    textoBuscador: "",
    showSearcher: false,
    inHome: null,
    modoDark: true,
    items: { baseEndPoint:''},
  }),
  components:{
    drawer
  },
  computed: {
    ...mapState(['allItems']),

    searchFinded() {
      /* SearchFinded searches the input-text from the store*/
      let auxItems = []
      for (let i in this.allItems)
        auxItems = auxItems.concat(this.allItems[i].items)

      auxItems = auxItems.filter(
          (item) =>
            this.LevenshteinDistance(
              item.title.toUpperCase(),
              this.textoBuscador.toUpperCase()
            ) < 3 ||
            item.title.toUpperCase().includes(this.textoBuscador.toUpperCase())
        )
      return auxItems
    },
  },
  methods: {
    ...mapMutations(["setDrawer"]),

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
    cambiarModo() {
      this.modoDark = !this.modoDark;
      this.$vuetify.theme.dark = this.modoDark;
    },
  },
  created() {
    this.inHome = this.$router.currentRoute.path === '/'
  },
  watch: {
    $route(to, from) {
      this.inHome = to.path === '/'
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