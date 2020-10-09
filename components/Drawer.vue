<template lang="pug">
  v-navigation-drawer(color='primaryMiddle' v-model='myDrawer' app='' clipped='')
    v-list
      v-list-item(:to='items.baseEndPoint' exact='')
        v-subheader.grey--text.font-weight-black {{ items.title }}:
      v-divider
      template(v-for='(item,index) in items.items')
        v-list-group(v-if='item.items && item.items.length > 0' :key="`${index}-${item.title}-manylines`" :prepend-icon='item.action' no-action='' :disabled='item.block')
          template(v-slot:activator='')
            v-list-item-content
              v-list-item-title(v-text='item.title')
          v-list-item(v-for='subItem in item.items' :key='`${index}-${subItem.title}-${subItem.icon}`' :to='subItem.to')
            v-list-item-icon.mr-2
              v-icon {{subItem.icon}}
            v-list-item-content
              v-list-item-title(v-text='subItem.title')
        v-list-item(v-else='' :key="`${index}-${item.title}-oneline`" :to='item.to' :disabled='item.block')
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
      if (url === "/"  || url === "/nosotros" ) this.items = this.courses['home']
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