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
      <v-list>
        <template v-for="(item,index) in allItems['android'].items">
          <v-list-group
            v-if="item.items && item.items.length > 0"
            :key="index+'-'+item.title"
            v-model="item.active"
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
            :key="item.title"
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
        </template>
      </v-list>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['allItems']),
  },
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