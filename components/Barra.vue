<template>
  <div>
    <v-navigation-drawer color="primaryMiddle" v-model="drawer" app clipped>
      <v-list>
        <v-list-item :to="items.baseEndPoint" exact>
          <v-subheader class="grey--text font-weight-black">{{ items.title }}:</v-subheader>

        </v-list-item>
        <v-divider></v-divider>
        <template v-for="(item,index) in items.items">
          <v-list-group
            v-if="item.items && item.items.length > 0"
            :key="index+'-'+item.title+'-manylines'"
            :prepend-icon="item.action"
            no-action
            :disabled="item.block"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="subItem in item.items"
              :key="subItem.title"
              :to="subItem.to"
            >
              <v-list-item-icon class="mr-2">
                <v-icon>{{subItem.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="subItem.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.title+'-oneline'"
            :to="item.to"
            :disabled="item.block"
          >
            <v-list-item-icon class="mr-3">
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
          </v-list-item>
          <v-divider :key="item.title"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
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
              v-for="(item,index) in searcFinded"
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
import path from "path";
import { mapState } from 'vuex'
export default {
  data: () => ({
    textoBuscador: "",
    showSearcher: false,
    drawer: false,
    inHome: null,
    modoDark: true,
    items: [],
  }),
  computed: {
    ...mapState(['allItems']),

    searcFinded() {
      return this.allItems["poo"]["items"]
        .concat(this.allItems["android"]["items"])
        .concat(this.allItems["eDatos"]["items"])
        .concat(this.allItems["pEstructurada"]["items"])
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
      else if (url.includes("/eDatos", 0)) this.items = this.allItems["eDatos"];
      else if (url.includes("/pEstructurada", 0)) this.items = this.allItems["pEstructurada"];
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
  created() {
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
