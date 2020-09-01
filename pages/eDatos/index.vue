<template>
  <div>
    <v-container :class="[!this.$vuetify.breakpoint.xs?'padding-blog':'px-3']">
      <p class="display-1 text-center font-weight-black">Programación Estructurada</p>
      <p>Esta serie de documentos serán una introducción a la programación en general. Se abarcarán conceptos básicos</p>

      <p>Recomendaciones:</p>
      <ul>
        <li v-for="(req, index) in recomendaciones" :key="index+'reqsAndroid'">{{req}}</li>
      </ul>
      <br />
      <p>Contenido:</p>
      <v-card color="primaryMiddle" class="elevation-1">
        <v-list-item v-for="(item, index) in items" :key="index" link :to="item.to">
          <v-list-item-content>
            <v-list-item-title>{{index+1}}. {{ item.title }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
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
      { icon: "", title: "Introduccion", to: "/eDatos/01" },
      { icon: "", title: "Pilas", to: "/eDatos/02" },
      { icon: "mdi-code-tags", title: "Pilas <code>", to: "/eDatos/03" },
      { icon: "", title: "Colas", to: "/eDatos/04" },
      { icon: "mdi-code-tags", title: "Colas <code>", to: "/eDatos/05" },
      { icon: "", title: "Listas", to: "/eDatos/06" },
      {
        icon: "mdi-code-tags",
        title: "Listas simples normal",
        to: "/eDatos/07",
      },
      {
        icon: "mdi-code-tags",
        title: "Listas simples circular",
        to: "/eDatos/08",
      },
      {
        icon: "mdi-code-tags",
        title: "Listas Dobles normal",
        to: "/eDatos/09",
      },
      {
        icon: "mdi-code-tags",
        title: "Listas Dobles circular",
        to: "/eDatos/10",
      },
      { icon: "", title: "Recursividad", to: "/eDatos/11" },
      { icon: "", title: "Arboles", to: "/eDatos/12" },
      { icon: "mdi-code-tags", title: "Arboles <code>", to: "/eDatos/13" },
    ],
    recomendaciones: [
      "Conocimientos de algoritmos básicos",
      "Nociones de Programación Orientada a Objetos",
    ],
  }),
};
</script>