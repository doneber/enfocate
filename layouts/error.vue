<template lang="pug">
  v-app
    h1(v-if='error.statusCode === 404')
      | {{ pageNotFound }}
    h1(v-else='')
      | {{ otherError }}
    NuxtLink(to='/')
      | Vuelve a casa
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 No encontramos esa página',
      otherError: 'Ocurrió un error'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
