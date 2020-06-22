<template>
    <div>
        <doc-md />
    </div>
</template>

<script>
  import fm from "@/contents/Clases.md"

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