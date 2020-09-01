<template>
  <div>
    <v-container :class="[!this.$vuetify.breakpoint.xs?'padding-blog':'px-3']">
      <p class="display-1 text-center font-weight-black">Programación Orientada a Objetos</p>
      <p>En este apartado encontrarás una serie de documentos y/o videos relacionados con la materia de Algoritmos y Programación</p>

      <p>Recomendaciones:</p>
      <ul>
        <li v-for="(req, index) in recomendaciones" :key="index+'reqsPoo'">{{req}}</li>
      </ul>
      <p>Contenido:</p>
      <v-list color="primaryMiddle">
        <v-list-item v-for="([icon, text,to], index) in items" :key="index" link :to="to">
          <v-list-item-content>
            <v-list-item-title>{{index+1}}.- {{ text }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      ["mdi-play", "POO", "/poo/intro"],
      ["mdi-text-box-outline", "Abstración", "/poo/abstraccion"],
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
    recomendaciones: ["Conocimientos de programación básica"],
  }),
};
</script>