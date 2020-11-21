<template lang="pug">
v-container(:class="[!this.$vuetify.breakpoint.xs ? 'padding-blog' : 'px-3']")
  p.text-center.font-weight-black(:class="[heightTitle]") {{ title }}
  p.px-4 {{ description }}
  v-row
    v-col(cols="12", sm="12")
      v-card(height="100%" color='primaryMiddle')
        v-card-title
          P Dirigido a
        v-card-subtitle
          p {{ aimedAt }}
    v-col(cols="12", sm="6")
      v-card(height="100%" color='primaryMiddle')
        v-card-title
          P ¿Que aprenderas?
        v-card-subtitle
          ul
          li(v-for="i in whatYouWillLearn") {{ i }}
    v-col(cols="12", sm="6")
      v-card(height="100%" color='primaryMiddle')
        v-card-title
          P Requisitos
        v-card-subtitle
          ul
            li(v-for="i in requirements") {{ i }}
  center  
    br
    v-btn( v-if='!drawer' @click='setDrawer(true)' color="primaryDark" dark)
      v-icon(left) mdi-menu
      | Ver lecciones  
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["setDrawer"]),
  },
  computed: {
    ...mapState(["drawer"]),
    heightTitle() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "display-1";
        case "sm":
          return "display-2";
        case "md":
          return "display-3";
        case "lg":
          return "display-3";
        case "xl":
          return "display-3";
      }
    },
  },
  async asyncData({ params, app }) {
    const fileContent = await import(`~/contents/${params.course}/index.md`);
    const attrs = fileContent.attributes;
    return {
      title: attrs.title,
      description: attrs.description,
      requirements: attrs.requirements,
      whatYouWillLearn: attrs.whatYouWillLearn,
      aimedAt: attrs.aimedAt,
    };
  },
      head () {
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
};
</script>