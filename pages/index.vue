<template lang="pug">
  div
    v-container
      v-row(justify='center')
        v-col(md='10')
          p.display-2.text-center Bienvenido
          p.text-center Clases de programación:
      v-row
        v-col(v-for='(course, index) in cardCourses' cols='12' sm='6' lg='4' :key="index+'-course'")
          v-card.mx-auto(:to='course.baseEndPoint' height='100%')
            v-card-text.text-h5.font-weight-medium
              | {{ course.title }}
            v-card-text
              | {{ course.shortDescription }}
            v-card-actions.px-4
              span.font-weight-medium.text--lighten-2(:class="[$vuetify.theme.dark?'orange--text':'blue-grey--text text--lighten-1']") COMIENZA AHORA
              v-spacer
              v-chip.font-weight-bold(:color='course.color' :dark='!$vuetify.theme.dark' :light='$vuetify.theme.dark') {{course.id}}
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
import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({
    dialog: false,
  }),
  async created(){
    await this.getCardCourses()
  },
  methods:{
    ...mapActions(['getCardCourses'])
  },
  computed: {
    ...mapState(['cardCourses']),
  },
};
</script>
