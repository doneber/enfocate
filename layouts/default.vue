<template>
  <v-app>
    <barra />
    <v-main>
      <nuxt style="min-height:100%" />
      <v-footer padless>
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>@Enfocate</strong>
        </v-col>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
import barra from "@/components/Barra";
export default {
  components: {
    barra,
  },
};
</script>
<style >
.v-application code {
  background-color: grey;
  color: whitesmoke;
}
.v-application pre code {
  background-color: #2d2d2d;
  /* color: black; */
}
.theme--dark.v-application {
  /* background: #263238; */
  background: #212121;
  color: rgb(245, 245, 245)
}
.theme--dark.v-sheet {
  color: rgb(240, 240, 240)
}
.theme--light.v-application{
  /* background: #FAFAFA; */
}
img {
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.padding-blog {
  padding-left: 9%;
  padding-right: 9%;
}
.v-card__text p{
  margin-top: .9em; 
  line-height : 1.5em;
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