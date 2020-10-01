<template lang="pug">
  div
    v-container(:class="[!this.$vuetify.breakpoint.xs ? 'padding-blog' : 'px-3']")
      p.display-1.text-center.font-weight-black {{ title }}
      p {{ description }}
      p Recomendaciones:
      ul
        li(v-for='(req, index) in recommendations' :key="index + 'reqsAndroid'")
          | {{ req }}
</template>
<script>
export default {
  async asyncData({ params, app }) {
    const fileContent = await import(`~/contents/${params.course}/index.md`);
    const attrs = fileContent.attributes;
    return {
      title: attrs.title,
      description: attrs.description,
      recommendations: attrs.recommendations,
    };
  },
};
</script>