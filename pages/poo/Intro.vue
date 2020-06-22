<template>
    <div>
        <doc-md />
    </div>
</template>

<script>
  import fm from "@/contents/Intro.md"

  export default {
    components: {
      DocMd: fm.vue.component
    },
    data () {
      return {
        title: fm.attributes.title
      }
    }
  }
</script>