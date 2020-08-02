<template>
  <div>
    <v-sheet :color="this.$vuetify.theme.dark?'grey darken-3':'grey lighten-3'">
      <v-container :class="[!this.$vuetify.breakpoint.xs?'padding-blog':'px-3']" class="py-5">
        <p class="display-2 font-weight-black">{{ title }}</p>
        <p>
          <v-icon>mdi-clock</v-icon>
          {{year}}
        </p>
        <p>{{description}}</p>
      </v-container>
    </v-sheet>
    <v-container :class="[!this.$vuetify.breakpoint.xs?'padding-blog':'px-3']">
      <DynamicMarkdown
        :render-func="renderFunc"
        :static-render-funcs="staticRenderFuncs"
        :extra-component="extraComponent"
      />
    </v-container>
  </div>
</template>
<script lang="js">
  import DynamicMarkdown from "~/components/DynamicMarkdown.vue"
  export default {
    async asyncData ({params, app}) {
      const fileContent = await import(`~/contents/android/${params.slug}.md`)
      const attr = fileContent.attributes
      return {
        name: params.slug,
        title: attr.title,
        trans: attr.trans,
        year: attr.year,
        id: attr.id,
        cardAlt: attr.cardAlt,
        noMainImage: attr.noMainImage,
        description: attr.description,
        extraComponent: attr.extraComponent,
        renderFunc: `(${fileContent.vue.render})`,
        staticRenderFuncs: `[${fileContent.vue.staticRenderFns}]`,
        image: {
          main: attr.image && attr.image.main,
          og: attr.image && attr.image.og
        }
      }
    },
    components: { DynamicMarkdown},

  }
</script>