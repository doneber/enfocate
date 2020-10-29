<template lang="pug">
  div
    v-container.pb-5(:class="[!this.$vuetify.breakpoint.xs?'padding-blog':'px-3']")
      v-card.mt-2(color='primaryMiddle')
        v-card-text.pt-1
          .display-2.font-weight-black.mt-2 {{ title }}
          p {{description}}
          v-row
            v-col.my-0.py-0(cols='12' sm='7')
              v-list-item.pa-0.my-0
                v-list-item-avatar
                  v-icon(large) mdi-account
                v-list-item-content
                  v-list-item-title.mb-1.subtitle-2 {{ authorName? authorName : 'Autor anónimo' }}
                  v-list-item-subtitle.caption {{year}}
            v-col.p-r.my-0.py-0(cols='12' sm='5')
              v-list-item.py-0
                v-row(justify-sm='end')
                  template( v-if='whatsapp' )
                    v-btn(icon :href='whatsapp' target="_blank")
                      v-icon mdi-whatsapp
                  template( v-if='facebook' )
                    v-btn(icon :href='facebook' target="_blank")
                      v-icon mdi-facebook
                  template( v-if='twitter' )
                    v-btn(icon :href='twitter' target="_blank")
                      v-icon mdi-twitter
                  template( v-if='linkedin' )
                    v-btn(icon :href='linkedin' target="_blank")
                      v-icon mdi-linkedin
                  template( v-if='github' )
                    v-btn(icon :href='github' target="_blank")
                      v-icon mdi-github
                  template( v-if='gitlab' )
                    v-btn(icon :href='gitlab' target="_blank")
                      v-icon mdi-gitlab
  

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
        authorName: attr.authorName,
        whatsapp: attr.whatsapp,
        facebook: attr.facebook,
        twitter: attr.twitter,
        linkedin: attr.linkedin,
        github: attr.github,
        gitlab: attr.gitlab,
        year: attr.year,
        description: attr.description,
        extraComponent: attr.extraComponent,
        renderFunc: `(${fileContent.vue.render})`,
        staticRenderFuncs: `[${fileContent.vue.staticRenderFns}]`,
      }
    },
    components: { DynamicMarkdown},

  }
</script>