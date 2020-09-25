<template>
  <div>
    <v-container :class="[!this.$vuetify.breakpoint.xs?'padding-blog':'px-3']">
      <!-- <p class="display-4">{{baseEndPoint}}</p> -->
      <p class="display-1 text-center font-weight-black">{{allItems[baseEndPoint].title}}</p>
      <p>{{allItems[baseEndPoint].description}}</p>
      <template v-if="allItems[baseEndPoint]">
        <p>Recomendaciones:</p>
        <ul>
          <li v-for="(req, index) in allItems[baseEndPoint].recommendations" :key="index+'reqsAndroid'">{{req}}</li>
        </ul>
      </template>
      <p>Contenido:</p>
      <content-course v-if="allItems" :allItems="allItems" :baseEndPoint="baseEndPoint"/>
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
  created(){
    // console.log("created")
    // console.log(this.allItems);
  },
  computed: {
    ...mapState(["allItems"]),
  },
  data: () => ({
    // recommendations: [
    //   "Conocimientos de programación básica",
    //   "Nociones de programación orientada a objetos",
    // ],
  }),
  async asyncData ({params, app}) {
    console.log("params from index", params);
    return{
      baseEndPoint:params.course
    }
  }
};
</script>