<template lang="pug">
  v-app
    v-container
      v-row(justify='center' align='center')
        v-col(md='10')
          center
            h1(v-if='error.statusCode === 404')
              | {{ pageNotFound }}
            h1(v-else='')
              | {{ otherError }}
            NuxtLink(to='/')
                      v-icon.mr-2 mdi-home
                      | Volver a casa
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
