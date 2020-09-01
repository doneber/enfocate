<template>
  <div>
    <v-navigation-drawer color="primary" v-model="drawer" app clipped>
      <v-subheader class="mt-4 grey--text font-weight-black">{{ items.title }}:</v-subheader>
      <v-list>
        <v-divider></v-divider>
        <template v-for="(item, index) in items.items">
          <v-list-item :key="'bar-item'+index" link :to="item.to">
            <v-list-item-content>
              <v-list-item-title>{{index+1}}. {{ item.title }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon class="mx-0">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-divider :key="index"></v-divider>
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
          color="primary"
          v-click-outside="ocultarTodoElBuscador"
          v-if="textoBuscador"
          class="hijo"
          ma-0
          pa-0
          elevation="6"
          width="100%"
        >
          <v-list color="primary">
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
          { icon: "mdi-play", title: "POO", to: "/poo/intro" },
          {
            icon: "mdi-text-box-outline",
            title: "Abstracción",
            to: "/poo/abstraccion",
          },
          { icon: "mdi-text-box-outline", title: "Clases", to: "/poo/clases" },
          {
            icon: "mdi-text-box-outline",
            title: "Sobrecarga | ejercicio",
            to: "/poo/sobrecarga",
          },
          {
            icon: "mdi-text-box-outline",
            title: "Comp. y Agreg. | ejercicio",
            to: "/poo/agregacionycomposicion",
          },
          {
            icon: "mdi-text-box-outline",
            title: "Herencia",
            to: "/poo/herencia",
          },
          { icon: "mdi-play", title: "Persistencia", to: "/poo/persistencia" },
        ],
      },
      android: {
        title: "Android",
        items: [
          { icon: "mdi-play", title: "Instalación", to: "/android/and01" },
          { icon: "", title: "Sumadora App", to: "/android/and02" },
          { icon: "", title: "Activities y bundles", to: "/android/and03" },
          { icon: "", title: "Persistencia", to: "/android/and04" },
        ],
      },
      estructuraDeDatos: {
        title: "Estructura de Datos",
        items: [
          { icon: "mdi-text-box-outline", title: "Introduccion", to: "/eDatos/01" },
          { icon: "mdi-text-box-outline", title: "Pilas", to: "/eDatos/02" },
          { icon: "mdi-code-tags", title: "Pilas <code>", to: "/eDatos/03" },
          { icon: "mdi-text-box-outline", title: "Colas", to: "/eDatos/04" },
          { icon: "mdi-code-tags", title: "Colas <code>", to: "/eDatos/05" },
          { icon: "mdi-text-box-outline", title: "Listas", to: "/eDatos/06" },
          { icon: "mdi-code-tags", title: "Listas simples normal", to: "/eDatos/07" },
          {
            icon: "mdi-code-tags",
            title: "Listas simples circular",
            to: "/eDatos/08",
          },
          { icon: "mdi-code-tags", title: "Listas Dobles normal", to: "/eDatos/09" },
          {
            icon: "mdi-code-tags",
            title: "Listas Dobles circular",
            to: "/eDatos/10",
          },
          { icon: "mdi-text-box-outline", title: "Recursividad", to: "/eDatos/11" },
          { icon: "mdi-text-box-outline", title: "Arboles", to: "/eDatos/12" },
          { icon: "mdi-code-tags", title: "Arboles <code>", to: "/eDatos/13" },
        ],
      },
      programacionEstructurada: {
        title: "Programacion Estructurada",
        items: [
          {icon:'', title: 'Introducción', to:'/pEstructurada/01'},
          {icon:'', title: '¿Que es un algoritmo? | Algoritmos y caracteristicas', to:'/pEstructurada/02'},
          {icon:'', title: 'Variables, constantes y tipos de Datos', to:'/pEstructurada/03'},
          {icon:'', title: 'Datos de Entrada y Salida', to:'/pEstructurada/04'},
          {icon:'', title: 'Operaciones aritmeticos (+, -, *, /,  %)', to:'/pEstructurada/05'},
          {icon:'', title: 'Etapas de resolucion de problemas', to:'/pEstructurada/06'},
          {icon:'', title: 'Estructura If', to:'/pEstructurada'},
          {icon:'', title: 'Operadores relacionales (mayor, menor igual, distinto)', to:'/pEstructurada'},
          {icon:'', title: 'Operadores lógicos (&&, ||, !)', to:'/pEstructurada'},
          {icon:'', title: 'Ejercicios con IF', to:'/pEstructurada'},
          {icon:'', title: 'Estructura Switch', to:'/pEstructurada'},
          {icon:'', title: 'Ejercicios con Switch', to:'/pEstructurada'},
          {icon:'', title: 'Sentencia While', to:'/pEstructurada'},
          {icon:'', title: 'Ejercicios con While', to:'/pEstructurada'},
          {icon:'', title: 'Sentencia For', to:'/pEstructurada'},
          {icon:'', title: 'Ejercicios con For', to:'/pEstructurada'},
          {icon:'', title: 'Funciones y Procedimientos', to:'/pEstructurada'},
          {icon:'', title: 'Strings', to:'/pEstructurada'},
          {icon:'', title: 'Arreglos', to:'/pEstructurada'},
        ],
      },
      programacionOrientadaObjetos2: {
        title: "POO",
        items: [
          {icon: 'mdi-text-box-outline', title: 'Introduccion', to:'/poo2/01'},
          {icon: 'mdi-text-box-outline', title: 'Que es POO', to:'/poo2/02'},
          {icon: 'mdi-text-box-outline', title: 'Que es un OBJETO?', to:'/poo2/03'},
          {icon: 'mdi-text-box-outline', title: 'ABSTRACCIÓN y Clases', to:'/poo2/04'},
          {icon: '', title: 'Diagramas de clase UML', to:'/poo2/'},
          {icon: '', title: 'Implementación de nuestras clases en código', to:'/poo2/'},
          {icon: '', title: 'Constructores y Destructores', to:'/poo2/'},
          {icon: '', title: 'ENCAPSULACION, Getters y Setters', to:'/poo2/'},
          {icon: '', title: 'Sobrecarga de Métodos', to:'/poo2/'},
          {icon: '', title: 'Sobrecarga de Operadores', to:'/poo2/'},
          {icon: '', title: 'Herencia simple', to:'/poo2/'},
          {icon: '', title: 'Herencia multiple', to:'/poo2/'},
          {icon: '', title: 'Agregación', to:'/poo2/'},
          {icon: '', title: 'Composición', to:'/poo2/'},
          {icon: '', title: 'Excepciones', to:'/poo2/'},
          {icon: '', title: 'Persistencia de Objetos', to:'/poo2/'},
        ],
      },
      home: { title: "Sobre la página", items: [{icon:"mdi-information-outline", title:"Información", to:"/nosotros"}] },
    },
  }),
  computed: {
    searcFinded() {
      return this.allItems["poo"]["items"]
        .concat(this.allItems["android"]["items"])
        .concat(this.allItems["estructuraDeDatos"]["items"])
        .concat(this.allItems["programacionEstructurada"]["items"])
        .concat(this.allItems["programacionOrientadaObjetos2"]["items"])
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
      else if (url.includes("/eDatos", 0)) this.items = this.allItems["estructuraDeDatos"];
      else if (url.includes("/pEstructurada", 0)) this.items = this.allItems["programacionEstructurada"];
      else if (url.includes("/poo2", 0)) this.items = this.allItems["programacionOrientadaObjetos2"];
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
