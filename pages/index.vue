<template lang="pug">
  div
    v-container
      v-row(justify='center')
        v-col(md='10')
          p.display-2.text-center Bienvenido
          p II/2020 | Programación
          v-row
            v-col(v-for='(course, index) in paradigmCourses' md='4' :key="index+'course'")
              v-card(style='min-height:100%' :to='course.link' :color='darkMode?course.colorDark:course.colorLight' :dark='course.dark' :disabled='course.disabled')
                v-card-title.headline {{ course.title }}
                v-card-text {{course.description}}
                v-card-actions
                  v-btn(text='') Curiosea ahora
          br
          p I/2020
          v-row
            v-col(v-for='(course, index) in courses' md='4' :key="index+'course'")
              v-card(style='min-height:100%' :to='course.link' :color='darkMode?course.colorDark:course.colorLight' :dark='course.dark' :disabled='course.disabled')
                v-card-title.headline {{ course.title }}
                v-card-text {{course.description}}
                v-card-actions
                  v-btn(text='') Curiosea ahora
    v-dialog(v-model='dialog' max-width='500')
      v-card(light='')
        v-card-title
        v-card-text
          p ¿De que trata esta app?
          ul
            li
              | Simplemente te da una breve expliación de diferentes temas de Programación quiza te interese
          p ¿Como puedo instalar esta web app?
          ul
            li
              | Deber agregarlo a tu celular click a 'Agregar a mi pantalla de Inicio' (o algo así)
            li
              | Si estas en desktop entonces en la parte superior de tu navegador te aparecerá el signo (+), el cual te permitirá instalarlo en tu compu
          |           TIP: Recuerda usar el boton menu arriba a la izquierda todo el tiempo. El tema Light, etc
    v-btn(fixed='' dark='' fab='' bottom='' right='' color='deep-orange lighten-1' style='bottom:1em; right:1em' @click='dialog=true')
      v-icon mdi-help
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    paradigmCourses: [
      {
        title: "Estructurada",
        description: "Programación Estructurada",
        colorDark: "blue-grey darken-1",
        colorLight: "blue-grey",
        link: "/pestructurada",
        dark: true,
        disabled: false,
      },
      {
        title: "Orientada a Objetos",
        description: "Programacion Orientada a Objetos",
        colorDark: "blue-grey darken-2",
        colorLight: "blue-grey darken-1",
        link: "/poo2",
        dark: true,
        disabled: false,
      },
      {
        title: "Estructura de Datos",
        description: "Estructura de Datos",
        colorDark: "blue-grey darken-3",
        colorLight: "blue-grey darken-2",
        link: "/edatos",
        dark: true,
        disabled: false,
      },
    ],
    courses: [
      {
        title: "POO (I/2020)",
        description: "Programación Orientada a Objetos",
        colorDark: "grey darken-3",
        colorLight: "",
        link: "/poo",
        dark: false,
        disabled: false,
      },
      {
        title: "Android",
        description: "Android básico para principiantes",
        colorDark: "green darken-4",
        colorLight: "green darken-3",
        link: "/android",
        dark: true,
        disabled: false,
      },
      {
        title: "Prog. Funcional",
        description: "Programación Funcional, conceptos",
        colorDark: "grey darken-2",
        colorLight: "grey",
        link: "/",
        dark: true,
        disabled: true,
      },
    ],
  }),
  computed: {
    darkMode() {
      return this.$vuetify.theme.dark;
    },
  },
};
</script>