<template>
  <div>
    <v-sheet>
      <v-container :class="[!this.$vuetify.breakpoint.xs?'padding-blog':'px-3']" class="pb-5">
        <v-card color="primary" class="mt-2">
          <v-card-text class="pt-1">
            <p class="display-2 font-weight-black mt-2">{{ title }}</p>
            <p class="my-1">
              <v-icon>mdi-clock</v-icon>
              {{year}}
            </p>
            <p class="my-1">{{description}}</p>

          </v-card-text>
        </v-card>
      </v-container>
    </v-sheet>
    <v-container :class="[!this.$vuetify.breakpoint.xs?'padding-blog':'px-2']">
      <v-card color="primaryLight" class="mt-0">
        <v-card-text class="pa-5">
          <DynamicMarkdown
            :render-func="renderFunc"
            :static-render-funcs="staticRenderFuncs"
            :extra-component="extraComponent"
          />
        </v-card-text>
      </v-card>
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