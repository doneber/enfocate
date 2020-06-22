<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped v-if="!inHome">
      <v-list>
        <v-list-item v-for="([icon, text,to], index) in items" :key="index" link :to="to">
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content  >
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :dark="true"
      app
      clipped-left
      :color="modoDark?'':'#003b63'"
      dense
      elevation="1"
      height="56"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn v-if="(!this.showSearcher && this.textoBuscador == '') || !this.$vuetify.breakpoint.xs" icon>
        <v-icon size="35" :color="modoDark?'#005c99':'white'">mdi-cookie</v-icon>
      </v-btn>
      <v-toolbar-title
        v-if="(!this.showSearcher && this.textoBuscador == '') || !this.$vuetify.breakpoint.xs"
        class="mr-12 align-center"
      >
        <span>Mr Cookie</span>
      </v-toolbar-title>
      <v-spacer />
      <v-text-field
        clearable
        :click:clear="this.textoBuscador?this.textoBuscador:this.textoBuscador=''"
        v-if="(this.showSearcher || !this.$vuetify.breakpoint.xs) || this.textoBuscador != ''"
        autofocus
        @focus="mostrarBuscador()"
        @blur="ocultarBuscador()"
        placeholder="Buscar"
        single-line
        hide-details
        v-model="textoBuscador"
      />
      <v-btn
        v-if="(!this.showSearcher && !this.textoBuscador) || !this.$vuetify.breakpoint.xs"
        @click="mostrarBuscador()"
        icon
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-spacer class="hidden-xs-only" />
      <v-btn icon to="/">
        <v-icon>
          mdi-home
        </v-icon>
      </v-btn>
      <v-btn v-if="(!this.showSearcher && this.textoBuscador == '') || !this.$vuetify.breakpoint.xs" @click="cambiarModo()" icon>
        <v-icon>{{ modoDark?'mdi-white-balance-sunny':'mdi-brightness-4'}}</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data: () => ({
    textoBuscador: "",
    showSearcher: true,
    drawer: true,
    inHome: null,
    modoDark:false,
    items:[
        ['mdi-play', 'POO','/poo/intro'],
        ['mdi-text-box-outline', 'Abstración','/poo/abstraccion'],
        ['mdi-text-box-outline', 'Clases','/poo/clases'],
        ['mdi-text-box-outline', 'Sobrecarga | ejercicio','/poo/sobrecarga'],
        ['mdi-text-box-outline', 'Herencia','/poo/herencia'],
    ]
  }),
  methods: {
    mostrarBuscador() {
      this.showSearcher = true;
    },
    ocultarBuscador() {
      this.showSearcher = false;
    },
    cambiarModo(){
        this.modoDark = !this.modoDark
    }
  },
  updated() {
    this.$vuetify.theme.dark = this.modoDark;
  },
  created(){
    this.inHome = this.$router.currentRoute.path == '/'?true:false;
  },
  watch:{
    $route (to, from){
        if(this.$router.currentRoute.path == '/')
          this.inHome=true
        else
          this.inHome=false
          
    }
  } 
};
</script>
