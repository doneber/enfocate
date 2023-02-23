<template lang="pug">
div.super-container
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
  v-container(:class="[!this.$vuetify.breakpoint.xs?'padding-blog':'px-2']")
    v-row
      v-col(cols="12", sm="6")
        v-btn(v-if="prev" :to="prev" color="primaryMiddle")
          v-icon(left) mdi-arrow-left
          | Anterior
      v-col.text-right(cols="12", sm="6")
        v-btn(v-if="next" :to="next" color="primaryMiddle")
          | Siguiente
          v-icon(right) mdi-arrow-right
</template>
<style scoped>
* {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.padding-blog {
  padding-left: 9%;
  padding-right: 9%;
}

.padding-video-xl {
  padding: 2em 0;
}

.padding-video-lg {
  padding: 2em 10em;
}
</style>
<script lang="js">
import DynamicMarkdown from "~/components/DynamicMarkdown"
import ProfileComponent from "~/components/ProfileComponent"
import { mapState, mapActions } from 'vuex'
export default {
  components: { DynamicMarkdown, ProfileComponent },
  data: () => ({
    prev: null,
    next: null,
  }),
  computed: {
    ...mapState(["courses"])
  },
  methods: {
    ...mapActions(['getCardCourses']),
  },
  async created() {
    await this.getCardCourses()
    const course = this.$route.params.course
    const currentPath = this.$route.path

    const courseData = await this.courses[course]
    const index = await courseData.items.findIndex(item => item.baseEndPoint === currentPath)
    if (index > 0)
      this.prev = courseData.items[index - 1].baseEndPoint
    if (index < courseData.items?.length - 1)
      this.next = courseData.items[index + 1].baseEndPoint
  },
  async asyncData({ params, app }) {
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
  head() {
    return {
      title: this.title,
      htmlAttrs: {
        lang: "es",
      },
      meta: [
        { name: "description", property: "og:description", content: this.description, hid: "description" },
        { property: "og:title", content: this.title },
      ],
    };
  },

}
</script>