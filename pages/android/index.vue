<template>
  <div>
    <v-container :class="[!this.$vuetify.breakpoint.xs?'padding-blog':'px-3']">
      <p class="display-1 text-center font-weight-black">Programación en Android</p>
      <p>En este apartado encontrarás una serie de documentos y/o videos relacionados con la programación de aplicaciones android, usaremos tanto el editor Eclipse Android, como Android Studio</p>

      <p>Recomendaciones:</p>
      <ul>
        <li v-for="(req, index) in recomendaciones" :key="index+'reqsAndroid'">{{req}}</li>
      </ul>
      <p>Contenido:</p>
      <v-card color="primaryMiddle" class="elevation-1">
          <v-list-item v-for="([icon, text,to], index) in items" :key="index" link :to="to">
            <v-list-item-content>
              <v-list-item-title>{{index+1}}.- {{ text }}</v-list-item-title>
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
      ["mdi-play", "Instalación", "/android/and01"],
      ["", "Sumadora App", "/android/and02"],
      ["", "Activities y bundles", "/android/and03"],
      ["", "Persistencia", "/android/and04"],
    ],
    recomendaciones: [
      "Conocimientos de programación básica",
      "Nociones de programación orientada a objetos",
    ],
  }),
};
</script>