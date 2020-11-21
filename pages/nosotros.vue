<template lang="pug">
  v-container
    v-row(justify='center')
      v-col(md='10')
        center
          p
            | La verdad es que dio flojera hacer esta parte de la página. Solo checkea lo que hay, vale? :'D
          v-btn(to='/' color="primaryDark" dark)
            v-icon.mr-2 mdi-home
            | Volver a casa
</template>
<script>
export default {

  head () {
    return {
      title: "Nosotros",
      htmlAttrs: {
        lang: "es",
      },
      meta: [
        { name: "author", content: "Eber" },
        { name: "description", property: "og:description", content: "Aréa de aprendizaje colaborativo", hid: "description" },
        { property: "og:title", content: "Nosotros" },
      ]
    };
  },
};
</script>