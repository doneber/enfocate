<template lang="pug">
  div
    div.primaryMiddle
      v-row.pa-12.pt-15(align='center' justify='center' class="super-container" style="min-height:60vh;")
        v-col.text-center.px-8(cols="6" md="6" sm="12" xs="12")
          h1.display-2.font-weight-bold(:class="[this.$vuetify.theme.dark?'white--text text--lighten-2':'' ]")
            | ¡Toma el control de tu aprendizaje!
          h3.font-weight-light
            | Esta es una aplicación web que proporciona contenido educativo para todo tipo estudiantes. Enfocate esta disponible en diferentes plataformas.
            | Ser autodidacta no significa estudiar solo.
          v-btn.my-6(style="background: #ee9f2f;" href="#cursos")
            | COMIENZA AHORA
        v-col.text-center.pa-15(cols="6" md="6" sm="12" xs="12")
          div.video-player()
            div(@click="playVideo()")
              img(src='https://img.youtube.com/vi/qopYgsT_1Zw/maxresdefault.jpg')
              .play-button(v-if="!showYouTubeVideo")
                button(class="colorPrimary")
            .loaded(v-if="showYouTubeVideo")
              iframe(allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen='' autoplay='false' src='https://www.youtube-nocookie.com/embed/qopYgsT_1Zw?autoplay=1')
    v-container.super-container(id="cursos" style="padding-top: 85px;")
      v-row(justify='center')
        v-col(md='12')
          h2.display-1.font-weight-regular Cursos de Programación 💻
      v-row
        v-col(v-for='(course, index) in cardCourses' cols='12' sm='6' lg='4' :key="index+'-course'")
          v-card.mx-auto(:to='course.baseEndPoint' height='100%' color="primaryMiddle" )
            v-card-text.text-h5.font-weight-medium
              | {{ course.title }}
            v-card-text
              | {{ course.shortDescription }}
            v-card-actions.px-4
              span.font-weight-medium(:class="[$vuetify.theme.dark?'':'blue-grey--text text--lighten-1']") {{course.disable?'No disponible':'COMIENZA AHORA'}}
              v-spacer
              v-chip.font-weight-bold(:color='course.color' :dark='!$vuetify.theme.dark' :light='$vuetify.theme.dark' ) INF-{{course.id}}
    div.super-container
      v-row.mx-0(style="min-height:15vh")
      v-row.mx-0(align='center' justify='center' style="min-height:75vh")
        v-col.text-center(cols="12" sm="12")
          h1.display-3.font-weight-bold(:class="[this.$vuetify.theme.dark?'orange--text text--lighten-2':'' ]")
            | Comunidad
          h3.font-weight-light
            | Sé parte de la comunidad en <b>discord</b> y comienza a compartir los demás<br>
          p.font-weight-light.font-italic La mejor forma de aprender es enseñando
          v-btn.py-4(x-large text tile href="https://discord.doneber.dev" target="_blank" )
            v-icon.mr-5(x-large right) mdi-discord
            |  Quiero unirme!
      v-row(justify='center')
        v-col(md='12')
          h2.display-1.font-weight-regular Cursos en Construcción 🚧
      v-row
        v-col(v-for='(course, index) in fakeCourses' cols='12' sm='6' lg='4' :key="index+'-course'")
          v-card.mx-auto( height='100%' color="primaryMiddle" )
            v-card-text.text-h5.font-weight-medium
              | {{ course.title }}
            v-card-text
              | {{ course.shortDescription }}
            v-card-actions.px-4
              span.font-weight-medium(:class="[$vuetify.theme.dark?'':'blue-grey--text text--lighten-1']") {{course.disable?'No disponible':'COMIENZA AHORA'}}
              v-spacer
              v-chip(:color='course.color' :dark='!$vuetify.theme.dark' :light='$vuetify.theme.dark' style="filter: grayscale(1)") INF-{{course.id}}
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
    div.super-container
      v-row.mx-0(style="min-height:15vh")
      v-row.mx-0(align='center' justify='center' style="min-height:75vh")
        v-col.text-center(cols="12" sm="12")
          h1.display-3.font-weight-bold(:class="[this.$vuetify.theme.dark?'orange--text text--lighten-2':'' ]")
            | Contacto
          h3.font-weight-light
            | Si tienes dudas sobre el proyecto o quieres saber mas sobre él <br> puedes comunicarte por los siguientes medios<br>
          v-btn.mx-0.px-0( icon fab class="primaryMiddle" href="https://twitter.com/doneberdev" target="_blank" )
            v-icon.mr-2( right) mdi-twitter
          v-btn.mx-0.px-0( icon fab class="primaryMiddle" href="https://www.facebook.com/doneberdev" target="_blank" )
            v-icon.mr-2( right) mdi-facebook
          v-btn.mx-0.px-0( icon fab class="primaryMiddle" href="https://github.com/doneber" target="_blank" )
            v-icon.mr-2( right) mdi-github
          v-btn.mx-0.px-0( icon fab class="primaryMiddle" href="mailto:doneber.dev@gmail.com" target="_blank" )
            v-icon.mr-2( right) mdi-email
    v-btn(fixed fab bottom right style='bottom:1em; right:1em' @click='dialog=true' color="primaryDark")
      v-icon mdi-help
    div
      v-row.mx-0(align='center' justify='center' style="min-height:500px" class="primaryMiddle")
        v-col.text-center(cols="12" sm="12")
          h1.display-3.font-weight-bold(:class="[this.$vuetify.theme.dark?'orange--text text--lighten-2':'' ]")
            | Aprende a tu ritmo
          h3.font-weight-light
            | ¡Toma el control de tu aprendizaje! <br> Encuentra los recursos necesarios para vencer tus materias
      v-row.mx-0(align='center' justify='center' style="min-height:400px" )
        v-col.text-center
          p.font-weight-thin
            | Enfocate es una aplicación web multiplataforma para <br> brindar contenido educativo orientado a los estudiantes universitarios.<br>
          p.font-weight-thin
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
import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({
    showYouTubeVideo: false,
    dialog: false,
    fakeCourses: [{
      id: 111,
      title: 'Programación Modular',
      shortDescription: 'Aprende como modularizar tus algoritmos y comienza a subir tu nivel como programador',
      color: 'lime darken-2',
      disable: true,
    },
    {
      id: 143,
      title: 'Complejidad Algoritmica',
      shortDescription: 'Entiende la complejidad algoritmica y de una vez deja de ser rechazado por tu juez favorito',
      color: 'orange',
      disable: true,
    },
    {
      id: 143,
      title: 'Programación Dinamica',
      shortDescription: '¿Necesitas optimizar tu algoritmo? Aprende el paradigma de programación dinámica. El futuro es hoy oiste viejo',
      color: 'cyan darken-1',
      disable: true,
    },
    {
      id: 161,
      title: 'Diseño de Base de Datos',
      shortDescription: 'Comienza a diseñar tus primeras bases de datos relacionales',
      color: 'teal',
      disable: true,
    },
    {
      id: 272,
      title: 'Taller de Base de Datos',
      shortDescription: 'Pon a prueba tus conocimientos de base de datos y avanza al siguiente nivel',
      color: 'lime',
      disable: true,
    },]
  }),
  computed: {
    ...mapState(['cardCourses']),
  },
  methods: {
    playVideo() {
      this.showYouTubeVideo = true
    }
  },
  head() {
    return {
      title: "Home",
      htmlAttrs: {
        lang: "es",
      },
      meta: [
        { name: "author", content: "Eber" },
        { name: "description", property: "og:description", content: "Aréa de aprendizaje colaborativo", hid: "description" },
        { property: "og:title", content: this.title },
      ]
    };
  },
};
</script>

<style scoped>

.video-player {
  box-sizing: border-box;
  background: teal;
  border-radius: 8px;
  margin-bottom: 8px;

  display: inline-block;
  overflow: hidden;
  position: relative;
}

.video-player img {
  border-radius: 8px;
}

.video-player:hover .play-button {
  filter: grayscale(0);
  cursor: pointer;
}

.video-player .play-button button {
  width: 6rem;
  height: 6rem;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 68 48"><path fill="%23f00" fill-opacity="0.8" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"></path><path d="M 45,24 27,14 27,34" fill="%23fff"></path></svg>');
}

.video-player .play-button {
  display: grid;
  place-content: center;
  background-color: transparent;
  background-position: 50%;
  background-repeat: no-repeat;
  filter: grayscale(100%);
  height: 100%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  transition: filter .1s cubic-bezier(0, 0, .2, 1);
  width: 100%;
  z-index: 1;
}

.loaded {
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  /*  */

  /* display: inline-block;
  overflow: hidden;
  position: relative; */

}

.loaded * {
  border: none;
}

.loaded iframe {
  width: 100%;
  height: 100%;
}
</style>