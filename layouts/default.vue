<template>
  <v-app>
    <barra />
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col md="10">

          <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>

</template>

<script>
import barra from "@/components/Barra";
export default {
  components: {
    barra,
  },
  created() {
    this.$vuetify.theme.dark = false;
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
