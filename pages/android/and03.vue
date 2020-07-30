<template>
    <div>
      <v-sheet :color="this.$vuetify.theme.dark?'grey darken-4':'grey lighten-4'">
      <v-container class="padding-blog py-5">
        <p class="display-2 font-weight-black">{{ title }}</p>
        <p><v-icon>mdi-clock</v-icon> {{year}}</p>
        <p>{{description}}</p>
      </v-container>
      </v-sheet>
      <v-container class="padding-blog">
        <doc-md />
      </v-container>
    </div>
</template>

<script>
  import fm from "@/contents/and03.md"

  export default {
    async asyncData(){
      const attr = fm.attributes
       return {
        // name: params.slug,
        title: attr.title,
        trans: attr.trans,
        year: attr.year,
        id: attr.id,
        cardAlt: attr.cardAlt,
        noMainImage: attr.noMainImage,
        description: attr.description,
        extraComponent: attr.extraComponent,
        // renderFunc: `(${fileContent.vue.render})`,
        // staticRenderFuncs: `[${fileContent.vue.staticRenderFns}]`,
        // image: {
        //   main: attr.image && attr.image.main,
        //   og: attr.image && attr.image.og
        // }
      }
    },
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