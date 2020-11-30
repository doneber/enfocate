<template lang="pug">
  div
    v-row.mx-0(align='center' justify='center' style="min-height:500px" class="primaryMiddle")
      v-col.text-center(cols="12" sm="12")
        h1.display-3.font-weight-bold(:class="[this.$vuetify.theme.dark?'orange--text text--lighten-2':'' ]")
          | Comunidad
        h3.font-weight-light
          | ¡Quiero colaborar con otras personas para crecer profesionalmente!
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