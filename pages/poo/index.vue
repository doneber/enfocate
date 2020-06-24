<template>
    <div>
        <p class="display-3 text-center">Programación Orientada a Objetos</p>
        <p>En este apartado encontrarás una serie de documentos y/o videos relacionados con la materia de Algoritmos y Programación:</p>

        <p>Requisitos:</p>
    <v-list-item v-for="req in requisitos" :key="req">
      <v-list-item-content>
        <v-list-item-title>{{req}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
        <p>Contenido:</p>
        <v-list>
            <v-list-item v-for="([icon, text,to], index) in items" :key="index" link :to="to">

            <v-list-item-content  >
                <v-list-item-title>{{index+1}}.- {{ text }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
                <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>
            </v-list-item>
        </v-list>
    </div>
</template>
<script>
export default {
  data: () => ({
    items:[
        ['mdi-play', 'POO','/poo/intro'],
        ['mdi-text-box-outline', 'Abstración','/poo/abstraccion'],
        ['mdi-text-box-outline', 'Clases','/poo/clases'],
        ['mdi-text-box-outline', 'Sobrecarga | ejercicio','/poo/sobrecarga'],
        ['mdi-text-box-outline', 'Herencia','/poo/herencia'],
    ],
    requisitos:[
        'Conocimientos de programación básica',
    ]
  }),
}
</script>