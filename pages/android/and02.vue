<template>
    <div>
        <doc-md />
    </div>
</template>

<script>
  import fm from "@/contents/and02.md"

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
<style scoped>
  .v-application code{
    background-color: none;
    color: none;
  }
</style>