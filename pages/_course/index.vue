<template>
  <div>
    <v-container :class="[!this.$vuetify.breakpoint.xs?'padding-blog':'px-3']">
      <template v-if="allItems && allItems[baseEndPoint]">
      <p class="display-1 text-center font-weight-black">{{allItems[baseEndPoint].title}}</p>
      <p>{{allItems[baseEndPoint].description}}</p>
      </template>
      <template v-if="allItems && allItems[baseEndPoint]">
        <p>Recomendaciones:</p>
        <ul>
          <li v-for="(req, index) in allItems[baseEndPoint].recommendations" :key="index+'reqsAndroid'">{{req}}</li>
        </ul>
      </template>
      <p>Contenido:</p>
      <template v-if="allItems && allItems[baseEndPoint]">
        <content-course :courseList="allItems[baseEndPoint]" />
      </template>
      <template v-else>
        <p>Ups, algo salio mal, puedes ver el contenido en el menu de la derecha</p>
      </template>
    </v-container>
  </div>
</template>
<script>
import { mapState } from "vuex"
import ContentCourse from '@/components/ContentCourse'
export default {
  components: {
    ContentCourse,
  },
  computed: {
    ...mapState(["allItems"]),
  },
  async asyncData ({params, app}) {
    return{
      baseEndPoint:params.course
    }
  }
};
</script>