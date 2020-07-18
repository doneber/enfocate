<template>
  <v-app>
    <barra />
    <v-main>
      <v-container style="min-height:100%">
        <v-row justify="center">
          <v-col md="10">

          <nuxt />
          </v-col>
        </v-row>
      </v-container>
      <v-footer padless
      :color="$vuetify.theme.dark?'':'#003b63'"
      dark
      >
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Enfocate</strong>
    </v-col>
  </v-footer>
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
<style >
  .v-application code {
    background-color: #fafafa;
    color: black;
  }
  img {
    max-width: 100%;
  }
</style>