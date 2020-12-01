<template lang="pug">
  div
    v-row.mx-0(style="min-height:15vh")
    v-row.mx-0(align='center' justify='center' style="min-height:50vh" class="primaryMiddle")
      v-col.text-center(cols="12" sm="12")
        h1.display-3.font-weight-bold(:class="[this.$vuetify.theme.dark?'orange--text text--lighten-2':'' ]")
          | Contacto
        h3.font-weight-light
          | Si tienes dudas sobre el proyecto o quieres saber mas sobre él <br> puedes comunicarte por los siguientes medios<br>
        v-btn.mx-0.px-0( icon fab class="primaryMiddle" href="https://twitter.com/doneber98" target="_blank" )
          v-icon.mr-2( right) mdi-twitter
        v-btn.mx-0.px-0( icon fab class="primaryMiddle" href="https://api.whatsapp.com/send?phone=59168022770&text=Saludos" target="_blank" )
          v-icon.mr-2( right) mdi-whatsapp
        v-btn.mx-0.px-0( icon fab class="primaryMiddle" href="https://www.facebook.com/doneber98" target="_blank" )
          v-icon.mr-2( right) mdi-facebook
        v-btn.mx-0.px-0( icon fab class="primaryMiddle" href="https://github.com/doneber" target="_blank" )
          v-icon.mr-2( right) mdi-github
        v-btn.mx-0.px-0( icon fab class="primaryMiddle" href="https://gitlab.com/doneber" target="_blank" )
          v-icon.mr-2( right) mdi-gitlab
        v-btn.mx-0.px-0( icon fab class="primaryMiddle" href="mailto:enfocate.tech@gmail.com" target="_blank" )
          v-icon.mr-2( right) mdi-email
        
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