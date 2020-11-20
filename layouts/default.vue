<template lang="pug">
  v-app
    Bar
    drawer
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
};
</script>
<style >
.v-application code {
  color: whitesmoke;
  background: rgba(0,0,0,0);
  font-size: 95%;
}
.v-application pre code, pre {
  background: var(--v-primaryLight-base) !important;
  /* color: black; */
}
.theme--dark.v-application {
  background: var(--v-background-base);
  color: rgb(249, 249, 249)
}
.theme--dark.v-sheet {
  color: rgb(245, 245, 245)
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

.v-card__text p{
  margin-top: .9em; 
  line-height : 1.4em;
}
ul > li, ol > li {
  font-size: 1.18em;
  line-height : 1.5em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
p {
  font-size: 1.25em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>