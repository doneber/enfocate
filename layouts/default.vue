<template lang="pug">
  v-app
    Bar
    drawer(v-if="display")
    v-main
      nuxt(style='min-height:100vh')
      foot
</template>

<script>
import Bar from "@/components/Bar"
import drawer from "@/components/Drawer"
import Foot from "@/components/Foot"
export default {
  components: {
    Bar, drawer, Foot
  },
  created() {
    const currentPath = this.$router.currentRoute.path
    this.display = currentPath.split('/').length > 2
  },
  data: () => ({
    display: true,
  }),
  watch: {
    $route(to) {
      this.display = to.path.split('/').length > 2
    }
  }
};
</script>
<style >
* {
  scroll-behavior: smooth;
}

h1, h2, h3 {
  line-height: 1.3;
}

.super-container {
  margin: auto;
  width: min(100%, 1300px);
}

.v-application code {
  /* color: whitesmoke; */
  background: rgba(0, 0, 0, 0);
  font-size: 95%;
}

.v-application pre code,
pre {
  background: var(--v-primaryLight-base) !important;
  /* color: black; */
}

.theme--light.v-application {
  background: var(--v-background-base);
}

.theme--dark.v-application {
  background: var(--v-background-base);
  /* color: rgb(249, 249, 249) */
}
.theme--dark.v-card > .v-card__text, .theme--dark.v-card > .v-card__subtitle {
  color: #d4d4d4;
}
.theme--light.v-card > .v-card__text, .theme--light.v-card > .v-card__subtitle {
  color: #555;
}

.v-application a {
  color: inherit;
}

img {
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

/* .theme--dark .v-card__text p{
  color: white !important;
}
.theme--light .v-card__text p{
  color: black !important;
} */
.v-card__text p {
  margin-top: .9em;
  line-height: 1.4em;
}

ul>li,
ol>li {
  font-size: 1.18em;
  line-height: 1.5em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

p {
  font-size: 1.25em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>