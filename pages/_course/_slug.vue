<template lang="pug">
  div
    template(v-if="linkVideo ")
      div(:class="this.$vuetify.breakpoint.xs?'':this.$vuetify.breakpoint.xl?'padding-video-xl':this.$vuetify.breakpoint.lg?'padding-video-lg':'px-10 pt-8'")
        div(style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;")
          iframe(width="560" height="315" style="position: absolute; top:0; left: 0; width: 100%; height: 100%;" :src="linkVideo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        .px-4
          .display-1.font-weight-black.mt-2 {{ title }}
          | {{description}}
          dynamic-markdown(:render-func='renderFunc' :static-render-funcs='staticRenderFuncs' :extra-component='extraComponent')
          br
          profile-component( :authorName="authorName" :year="year" :whatsapp="whatsapp" :facebook="facebook" :twitter="twitter" :linkedin="linkedin" :github="github" :gitlab="gitlab")
    template(v-else)
      v-container.pb-5(:class="[!this.$vuetify.breakpoint.xs?'padding-blog':'']")
        v-card.mt-2(color='primaryMiddle')
          v-card-text.pt-1
            .display-2.font-weight-black.mt-2 {{ title }}
            p {{description}}
            profile-component( :authorName="authorName" :year="year" :whatsapp="whatsapp" :facebook="facebook" :twitter="twitter" :linkedin="linkedin" :github="github" :gitlab="gitlab")
      v-container(:class="[!this.$vuetify.breakpoint.xs?'padding-blog':'px-2']")
        v-card.mt-0(color='primaryMiddle')
          v-card-text.pa-5
            dynamic-markdown(:render-func='renderFunc' :static-render-funcs='staticRenderFuncs' :extra-component='extraComponent')
</template>
<style scoped>
.padding-blog {
  padding-left: 9%;
  padding-right: 9%;
}
.padding-video-xl {
  padding: 2em 16em;
}
.padding-video-lg {
  padding: 2em 10em;
}

</style>
<script lang="js">
  import DynamicMarkdown from "~/components/DynamicMarkdown"
  import ProfileComponent from "~/components/ProfileComponent"
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
        icon: attr.icon,
        linkVideo: attr.linkVideo,
        extraComponent: attr.extraComponent,
        renderFunc: `(${fileContent.vue.render})`,
        staticRenderFuncs: `[${fileContent.vue.staticRenderFns}]`,
      }
    },
    components: { DynamicMarkdown, ProfileComponent},

  }
</script>