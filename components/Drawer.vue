<template>
    <v-navigation-drawer color="primaryMiddle" v-model="myDrawer" app clipped>
      <v-list>
        <v-list-item :to="items.baseEndPoint" exact>
          <v-subheader class="grey--text font-weight-black">{{ items.title }}:</v-subheader>
        </v-list-item>
        <v-divider></v-divider>
        <template v-for="(item,index) in items.items">
          <v-list-group
            v-if="item.items && item.items.length > 0"
            :key="index+'-'+item.title+'-manylines'"
            :prepend-icon="item.action"
            no-action
            :disabled="item.block"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="subItem in item.items"
              :key="subItem.title"
              :to="subItem.to"
            >
              <v-list-item-icon class="mr-2">
                <v-icon>{{subItem.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="subItem.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.title+'-oneline'"
            :to="item.to"
            :disabled="item.block"
          >
            <v-list-item-icon class="mr-3">
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
          </v-list-item>
          <v-divider :key="item.title"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
  props: ['items'],
  data: () => ({}),
  computed: {
    ...mapState(['drawer']),
    ...mapMutations(['setDrawer']), //notice that this is in computed methods
    myDrawer: {
      get() {
        return this.drawer;
      },
      set(value) {
        this.$store.commit('setDrawer', value)
      },
    },
  },
};
</script>