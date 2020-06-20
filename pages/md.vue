<template>
  <div>
    <h1>This component mounts `something.md` as Vue component</h1>
    <h2>{{ title }}</h2>
    <from-something />
  </div>
</template>

<script>
  import fm from "./something.md"

  export default {
    components: {
      FromSomething: fm.vue.component
    },
    data () {
      return {
        title: fm.attributes.title
      }
    }
  }
</script>