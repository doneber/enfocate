<template>
  <div>
    <v-container :class="[!this.$vuetify.breakpoint.xs?'padding-blog':'px-3']">
      <p class='display-1 text-center font-weight-black'>Programación Orientada a Opbejos</p>
      <p>Esta serie de documentos serán una introducción a la programación en general. Se abarcarán conceptos básicos</p>

      <p>Recomendaciones:</p>
      <ul>
        <li v-for='(req, index) in recomendaciones' :key="index+'reqsAndroid'">{{req}}</li>
      </ul>
      <br>
      <p>Contenido:</p>
      <v-card color='primary' class='elevation-1'>
        <v-list-item v-for='(item, index) in items' :key='index' link :to='item.to'>
          <v-list-item-content>
            <v-list-item-title>{{index+1}}. {{ item.title }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
            <v-icon>mdi-text-box-outline</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      {icon: '', title: 'Introduccion', to:'/poo2/01'},
      {icon: '', title: 'Que es POO', to:'/poo2/02'},
      {icon: '', title: 'Que es un OBJETO?', to:'/poo2/03'},
      {icon: '', title: 'ABSTRACCIÓN y Clases', to:'/poo2/04'},
      {icon: '', title: 'Diagramas de clase UML', to:'/poo2/'},
      {icon: '', title: 'Implementación de nuestras clases en código', to:'/poo2/'},
      {icon: '', title: 'Constructores y Destructores', to:'/poo2/'},
      {icon: '', title: 'ENCAPSULACION, Getters y Setters', to:'/poo2/'},
      {icon: '', title: 'Sobrecarga de Métodos', to:'/poo2/'},
      {icon: '', title: 'Sobrecarga de Operadores', to:'/poo2/'},
      {icon: '', title: 'Herencia simple', to:'/poo2/'},
      {icon: '', title: 'Herencia multiple', to:'/poo2/'},
      {icon: '', title: 'Agregación', to:'/poo2/'},
      {icon: '', title: 'Composición', to:'/poo2/'},
      {icon: '', title: 'Excepciones', to:'/poo2/'},
      {icon: '', title: 'Persistencia de Objetos', to:'/poo2/'},
    ],
    recomendaciones: [
      "Conocimientos basicos de Programación Estructurada",
      "Conocimientos basicos de Programación Modular",
    ],
  }),
};
</script>