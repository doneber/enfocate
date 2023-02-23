<template lang="pug">
  v-list.py-0
    template(v-for='(item,index) in lessons')
      v-list-item(:key="`${index}-${item.title}`" :to='item.baseEndPoint' :disabled='item.block' @click="itemClicked(`${index}-${item.title}`)")
        v-list-item-icon.mr-3
          v-icon( :color="checkList.includes(`${index}-${item.title}`)?'amber accent-4':''") {{ checkList.includes(`${index}-${item.title}`)?antiIcon(item.icon):item.icon}}
        v-list-item-content(class="text-left")
          v-list-item-title(v-text='item.title')
      v-divider(v-if="index < lessons.length-1" :key="`${index}+${item.title}-divider`")
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data: () => ({
    lessons: null,
    checkList: [],
  }),
  async created() {
    await this.getCourses() //getCourses from state
    const currentPath = this.$router.currentRoute.path
    const currentCourseName = currentPath.split('/')[1]
    this.lessons = this.courses[currentCourseName].items
    console.log('lessons:', this.lessons)

  },
  methods: {
    ...mapActions(["getCourses"]),
    itemClicked(key){
      console.log(key);
      if (key === "0-Home"  || key === "1-Nosotros" || key === "2-Comunidad" || key === "3-Contacto") return;
      const index = this.checkList.indexOf(key)
      if (index > -1) this.checkList.splice(index, 1)
      else this.checkList.push(key)
    },
    antiIcon(icon){
      const miMapa = new Map();
      miMapa.set("mdi-play","mdi-play-circle")
      miMapa.set("mdi-text-box-outline","mdi-text-box")
      miMapa.set("mdi-code-tags","mdi-code-tags-check")
      const newIcon = miMapa.get(icon)
      return newIcon?newIcon:icon
    }
  },
  computed: {
    ...mapState(["courses"]),
  }
}
</script>