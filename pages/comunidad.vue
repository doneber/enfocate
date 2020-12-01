<template lang="pug">
  div
    v-row.mx-0(style="min-height:15vh")
    v-row.mx-0(align='center' justify='center' style="min-height:50vh" class="primaryMiddle")
      v-col.text-center(cols="12" sm="12")
        h1.display-3.font-weight-bold(:class="[this.$vuetify.theme.dark?'orange--text text--lighten-2':'' ]")
          | Comunidad
        h3.font-weight-light
          | Sé parte de la comunidad en <b>discord</b> y comienza a compartir los demás<br>
        p.font-weight-light.font-italic La mejor forma de aprender es enseñando
        v-btn.py-4(x-large text tile href="https://discord.gg/HXBhXJJ9kn" target="_blank" )
          v-icon.mr-5(x-large right) mdi-discord
          |  Quiero unirme!
</template>
<script>
export default {

  head () {
    return {
      title: "Comunidad",
      htmlAttrs: {
        lang: "es",
      },
      meta: [
        { name: "author", content: "Eber" },
        { name: "description", property: "og:description", content: "Aréa de aprendizaje colaborativo", hid: "description" },
        { property: "og:title", content: "Comunidad" },
      ]
    };
  },
};
</script>