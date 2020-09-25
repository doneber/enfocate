<template>
  <v-card>
    <v-list>
      <template v-for="(item, index) in allItems[baseEndPoint].items">
        <v-list-group
          v-if="item.items && item.items.length > 0"
          :key="index + '-' + item.title"
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
              <v-icon>{{ subItem.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="subItem.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item
          v-else
          :key="item.title"
          :to="item.to"
          :disabled="item.block"
        >
          <v-list-item-icon class="mr-3">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>
<script>
export default {
   props: ["allItems", "baseEndPoint"]
}
</script>