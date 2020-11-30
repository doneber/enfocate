<template lang="pug">
  div
    v-row.mx-0(align='center' justify='center' style="min-height:500px" class="primaryMiddle")
      v-col.text-center(cols="12" sm="12")
        h1.display-3.font-weight-bold(:class="[this.$vuetify.theme.dark?'orange--text text--lighten-2':'' ]")
          | Aprende a tu ritmo
        h3.font-weight-light
          | ¡Toma el control de tu aprendizaje! <br> Encuentra los recursos necesarios para vencer tus materias
    v-row.mx-0(align='center' justify='center' style="min-height:400px" )
      v-col.text-center
        p.font-weight-thin(:class="[heightTitle]")
          | Enfocate es una aplicación web multiplataforma para <br> brindar contenido educativo orientado a los estudiantes universitarios.<br>
        p.font-weight-thin(:class="[heightTitle]")
          | Este proyecto también busca fomentar la enseñanza como <br> forma de aprendizaje y crecimiento personal.
    v-row.mx-0(align='center' justify='center' style="min-height:400px" class="primaryMiddle")
      v-col.text-center(cols="12" sm="12")
        h1.display-3.font-weight-bold(:class="[this.$vuetify.theme.dark?'orange--text text--lighten-2':'' ]")
          | Crea tu propio contenido
        h3.font-weight-light
          | ¡Elabora contenido y comparte tus conocimientos! <br> Publica tu material en nuestra plataforma
    v-row.mx-0(align='center' justify='center' style="min-height:500px")
      v-container
        v-row.mx-0
          v-col.text-center(cols="12" sm="4")
            h1.display-2.font-weight-bold(:class="[this.$vuetify.theme.dark?'orange--text text--lighten-2':'' ]")
              | Misión
            p.font-weight-light
              | Crear un mundo donde cualquier persona pueda enseñar y aprender con cualquier persona
          v-col.text-center(cols="12" sm="4")
            h1.display-2.font-weight-bold(:class="[this.$vuetify.theme.dark?'orange--text text--lighten-2':'' ]")
              | Visión
            p.font-weight-light
              | Ser un espacio de educación y referente a nivel nacional para la difusión de la educación autodidacta
          v-col.text-center(cols="12" sm="4")
            h1.display-2.font-weight-bold(:class="[this.$vuetify.theme.dark?'orange--text text--lighten-2':'' ]")
              | Valores
            p.font-weight-light
              | Colaboración <br> Aprendizaje continuo <br> Compartimos lo que sabemos
</template>
<script>
export default {
    computed: {
      heightTitle() {
        switch (this.$vuetify.breakpoint.name) {
          case "xs":
            return "";
          case "sm":
            return "";
          case "md":
            return "display-1";
          case "lg":
            return "display-1";
          case "xl":
            return "display-1";
        }
      },
  },
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