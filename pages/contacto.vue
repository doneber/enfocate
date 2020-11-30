<template lang="pug">
  div
    v-row.mx-0(align='center' justify='center' style="min-height:500px" class="primaryMiddle")
      v-col.text-center(cols="12" sm="12")
        h1.display-3.font-weight-bold(:class="[this.$vuetify.theme.dark?'orange--text text--lighten-2':'' ]")
          | Contacta con nosotros
        h3.font-weight-light
          | ¡Quiero compartir mis conocimientos con los demás!
    //- v-row.mx-0(align='center' justify='center' style="min-height:400px" )
    //-   v-col.text-center
    //-     p.display-1.font-weight-thin
    //-       | .
    //-     p.display-1.font-weight-thin
    //-       | 
</template>
<script>
export default {

  head () {
    return {
      title: "Contacto",
      htmlAttrs: {
        lang: "es",
      },
      meta: [
        { name: "author", content: "Eber" },
        { name: "description", property: "og:description", content: "Aréa de aprendizaje colaborativo", hid: "description" },
        { property: "og:title", content: "Contacto" },
      ]
    };
  },
};
</script>