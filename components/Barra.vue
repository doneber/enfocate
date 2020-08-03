<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-subheader class="mt-4 grey--text font-weight-black">{{ items.title }}:</v-subheader>
      <v-list>
        <v-divider></v-divider>
        <template v-for="([icon, text,to], index) in items.items">
          <v-list-item :key="'bar-item'+index" link :to="to">
            <v-list-item-content>
              <v-list-item-title>{{index+1}}. {{ text }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon class="mx-0">
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-divider :key="index"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="pikachu" clipped-left dense elevation="1" height="56">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-img max-width="35px" class="mr-2" src="/icon.png" @click="goHome()" />
      <v-toolbar-title
        class="align-center"
        @click="goHome()"
        :class="[!showSearcher?'':'hidden-xs-only']"
      >Enfócate</v-toolbar-title>
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
          v-click-outside="ocultarBuscador"
          v-if="textoBuscador"
          class="hijo"
          ma-0
          pa-0
          elevation="6"
          width="100%"
        >
          <v-list>
            <v-list-item
              v-for="([icon,nom, link],index) in searcFinded"
              :key="index"
              :to="link"
              @click="ocultarBuscador()"
            >
              <v-list-item-content>
                <v-list-item-title v-text="nom">{{ nom }}</v-list-item-title>
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
export default {
  data: () => ({
    textoBuscador: "",
    showSearcher: false,
    drawer: false,
    inHome: null,
    modoDark: true,
    items: [],
    allItems: {
      poo: {
        title: "POO",
        items: [
          ["mdi-play", "POO", "/poo/intro"],
          ["mdi-text-box-outline", "Abstracción", "/poo/abstraccion"],
          ["mdi-text-box-outline", "Clases", "/poo/clases"],
          ["mdi-text-box-outline", "Sobrecarga | ejercicio", "/poo/sobrecarga"],
          [
            "mdi-text-box-outline",
            "Comp. y Agreg. | ejercicio",
            "/poo/agregacionycomposicion",
          ],
          ["mdi-text-box-outline", "Herencia", "/poo/herencia"],
          ["mdi-play", "Persistencia", "/poo/persistencia"],
        ],
      },
      android: {
        title: "Android",
        items: [
          ["mdi-play", "Instalación", "/android/and01"],
          ["", "Sumadora App", "/android/and02"],
          ["", "Activities y bundles", "/android/and03"],
          ["", "Persistencia", "/android/and04"],
        ],
      },
      home: { title: "Sobre la página", items: [["", "Información", "/"]] },
    },
  }),
  computed: {
    searcFinded() {
      return this.allItems["poo"]["items"]
        .concat(this.allItems["android"]["items"])
        .filter(
          (item) =>
            this.LevenshteinDistance(
              item[1].toUpperCase(),
              this.textoBuscador.toUpperCase()
            ) < 3 ||
            item[1].toUpperCase().includes(this.textoBuscador.toUpperCase())
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
      else if (url.includes("/poo", 0)) this.items = this.allItems["poo"];
      else if (url.includes("/android", 0))
        this.items = this.allItems["android"];
    },
    mostrarBuscador() {
      this.showSearcher = true;
    },
    ocultarBuscador() {
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
