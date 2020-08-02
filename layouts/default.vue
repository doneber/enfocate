<template>
  <v-app>
    <barra />
    <v-main>
      <nuxt style="min-height:96%" />
      <v-footer padless>
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>@donEber98</strong>
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
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
<style >
.v-application code {
  background-color: #fafafa;
  color: black;
}
.theme--dark.v-application {
  background: #212121;
  color: rgb(245, 245, 245)
}
.theme--dark.v-sheet {
  color: rgb(240, 240, 240)
}
.theme--light.v-application{
  background: #FAFAFA;
}
img {
  max-width: 100%;
}
.padding-blog {
  padding-left: 9%;
  padding-right: 9%;
}
dynamicMarkdown p {
  text-align: justify;
}
p {
  font-size: 17.5px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>