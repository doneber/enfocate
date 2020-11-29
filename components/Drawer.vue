<template lang="pug">
  v-navigation-drawer(color='primaryMiddle' v-model='myDrawer' app='' clipped='')
    v-list.pt-0
      v-list-item.pt-0(:to='items.baseEndPoint' exact='')
        v-subheader.font-weight-bold {{ items.title }}:
      v-divider
      template(v-for='(item,index) in items.items')
        v-list-item(:key="`${index}-${item.title}-oneline`" :to='item.baseEndPoint' :disabled='item.block')
          v-list-item-icon.mr-3
            v-icon {{item.icon}}
          v-list-item-content
            v-list-item-title(v-text='item.title')
        v-divider(:key="`${index}+${item.title}-divider`")
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({
    items: { baseEndPoint:'/'},
  }),
  async created(){
    await this.getCourses() //getCourses from state
    this.calculaDrawer(this.$router.currentRoute.path)
  },
  methods:{
    ...mapActions(["getCourses"]),
    calculaDrawer(url) {
      /* depending of the actual route, we dispaly an especific item's list */
      if (url === "/"  || url === "/nosotros" || url === "/comunidad" || url === "/contacto") this.items = this.courses['home']
      else this.items = this.courses[url.split('/')[1]]
    },
  },
  computed: {
    ...mapState(['courses','drawer']),
    myDrawer: {
      get() {
        return this.drawer;
      },
      set(value) {
        this.$store.commit('setDrawer', value)
      },
    },
  },
  watch: {
    $route(to, from) {
      this.calculaDrawer(to.path)
    },
  },
};
</script>