<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped v-if="!inHome">
      <v-subheader class="mt-4 grey--text font-weight-black">CONTENIDO:</v-subheader>
      <v-list>
        <v-divider> </v-divider>
        <template v-for="([icon, text,to], index) in items">

        <v-list-item :key="'bar-item'+index" link :to="to" @click="drawer=true">

          <v-list-item-content  >
            <v-list-item-title>{{index+1}}. {{ text }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon class="mx-0">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
        </v-list-item>
       <v-divider :key="index"></v-divider>
        </template>
      </v-list>
      <v-subheader class="mt-4 grey--text font-weight-black">Android:</v-subheader>
        <v-list>
        <v-divider> </v-divider>
        <template v-for="([icon, text,to], index) in itemsAndroid">

        <v-list-item :key="'bar-itemAndroid'+index" link :to="to" @click="drawer=true">

          <v-list-item-content  >
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon class="mx-0">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon> 
          <v-list-item-icon class="mx-0">
            <v-icon>mdi-text-box-outline</v-icon>
          </v-list-item-icon>
        </v-list-item>
       <v-divider :key="index"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      dark
      app
      clipped-left
      :color="modoDark?'':'#003b63'"
      dense
      elevation="1"
      height="56"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="!inHome" />
      <!-- <v-btn v-if="(!this.showSearcher && this.textoBuscador == '') || !this.$vuetify.breakpoint.xs" icon>
        <v-icon size="35" :color="modoDark?'#005c99':'white'">mdi-cookie</v-icon>
      </v-btn> -->
      <v-img max-width="35px" class="mr-2" src="/icon.png" />
      <v-toolbar-title
        class="align-center"
        v-show="!this.showSearcher || !this.$vuetify.breakpoint.xs"
      >
        Enfócate
      </v-toolbar-title>
      <v-spacer />
      <v-text-field
        clearable
        class="hidden-xs-only"
        placeholder="Buscar"
        single-line
        hide-details
        disabled
      />
      <v-btn
        disabled
        @click="mostrarBuscador()"
        icon
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-spacer class="hidden-xs-only" />
      <v-btn icon to="/" v-if="!inHome">
        <v-icon>
          mdi-home
        </v-icon>
      </v-btn>
      <v-btn v-if="!this.showSearcher && this.textoBuscador == ''" @click="cambiarModo()" icon>
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
    drawer: true,
    inHome: null,
    modoDark:false,
    items:[
        ['mdi-play', 'POO','/poo/intro'],
        ['mdi-text-box-outline', 'Abstración','/poo/abstraccion'],
        ['mdi-text-box-outline', 'Clases','/poo/clases'],
        ['mdi-text-box-outline', 'Sobrecarga | ejercicio','/poo/sobrecarga'],
        ['mdi-text-box-outline', 'Comp. y Agreg. | ejercicio','/poo/agregacionycomposicion'],
        ['mdi-text-box-outline', 'Herencia','/poo/herencia'],
        ['mdi-play', 'Persistencia','/poo/persistencia'],
    ],
    itemsAndroid:[
        ['mdi-play', 'Parte 1','/android/and01'],
        ['', 'Parte 2','/android/and02'],
        ['', 'Parte 3','/android/and03'],
    ],

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
