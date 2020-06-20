<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-subheader class="mt-4 grey--text text--darken-1">TEMAS:</v-subheader>
        <v-list v-for="(item,index) in items" :key="index">
          <v-list-item>
            <v-list-item-title>{{index+1}}.- {{item.titulo}}</v-list-item-title>
          </v-list-item>
        </v-list>
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
        <v-icon size="35" :color="modoDark?'#005c99':'white'">mdi-youtube</v-icon>
      </v-btn>
      <v-toolbar-title
        v-if="(!this.showSearcher && this.textoBuscador == '') || !this.$vuetify.breakpoint.xs"
        class="mr-12 align-center"
      >
        <span>Mr tech</span>
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
    modoDark:false,
    items:[
        {titulo:"POO"},
        {titulo:"Herencia"},
        {titulo:"Polimorfismo"},
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
  }
};
</script>
