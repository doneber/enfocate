<template lang="pug">
  div
    v-sheet
      v-container.pb-5(:class="[!this.$vuetify.breakpoint.xs?'padding-blog':'px-3']")
        v-card.mt-2(color='primaryMiddle')
          v-card-text.pt-1
            p.display-2.font-weight-black.mt-2 {{ title }}
            p.my-1
              v-icon mdi-clock
              |               {{year}}
            p.my-1 {{description}}
    v-container(:class="[!this.$vuetify.breakpoint.xs?'padding-blog':'px-2']")
      v-card.mt-0(color='primaryLight')
        v-card-text.pa-5
          dynamic-markdown(:render-func='renderFunc' :static-render-funcs='staticRenderFuncs' :extra-component='extraComponent')
</template>
<script lang="js">
  import DynamicMarkdown from "~/components/DynamicMarkdown.vue"
  export default {
    async asyncData ({params, app}) {
      const fileContent = await import(`~/contents/${params.course}/${params.slug}.md`)
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