<template>
  <div>
    <v-container :class="[!this.$vuetify.breakpoint.xs?'padding-blog':'px-3']">
      <p class="display-1 text-center font-weight-black">Estructura de Datos y Algoritmos</p>
      <p>En este apartado encontrarás una serie de documentos relacionados a diferentes estrucutras de datos clásicos</p>

      <p>Recomendaciones:</p>
      <ul>
        <li v-for="(req, index) in recomendaciones" :key="index+'reqsAndroid'">{{req}}</li>
      </ul>
      <br>
      <p>Contenido:</p>
      <v-card color="primary" class="elevation-1" disabled>
        <v-list-item v-for="([icon, text,to], index) in items" :key="index" link :to="to">
          <v-list-item-content>
            <v-list-item-title>{{index+1}}. {{ text }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
            <v-icon>mdi-text-box-outline</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      ["", "Introduccion", ""],
      ["", "Pilas", ""],
      ["", "Colas", ""],
      ["", "Listas simples normal", ""],
      ["", "Listas simples circular", ""],
      ["", "Listas Dobles normal", ""],
      ["", "Listas Dobles circular", ""],
      ["", "Recursividad", ""],
      ["", "Arboles", ""],
    ],
    recomendaciones: [
      "Conocimientos de algoritmos básicos",
      "Nociones de Programación Orientada a Objetos",
    ],
  }),
};
</script>