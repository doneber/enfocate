<template>
  <div>
    <v-container :class="[!this.$vuetify.breakpoint.xs?'padding-blog':'px-3']">
      <p class='display-1 text-center font-weight-black'>Programación Estructurada</p>
      <p>Esta serie de documentos serán una introducción a la programación en general. Se abarcarán conceptos básicos</p>

      <p>Recomendaciones:</p>
      <ul>
        <li v-for='(req, index) in recomendaciones' :key="index+'reqsAndroid'">{{req}}</li>
      </ul>
      <br>
      <p>Contenido:</p>
      <v-card color="primaryMiddle" class='elevation-1'>
      <v-list>
        <template v-for="(item,index) in allItems['programacionEstructurada'].items">
          <v-list-group
            v-if="item.items && item.items.length > 0"
            :key="index+'-'+item.title"
            v-model="item.active"
            :prepend-icon="item.action"
            no-action
            :disabled="item.block"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="subItem in item.items"
              :key="subItem.title"
              :to="subItem.to"
            >
              <v-list-item-icon class="mr-2">
                <v-icon>{{subItem.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="subItem.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.title"
            :to="item.to"
            :disabled="item.block"
          >
            <v-list-item-icon class="mr-3">
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['allItems']),
  },
  data: () => ({
    items: [
      {icon:'', title: 'Introducción', to:'/pEstructurada/01'},
      {icon:'', title: '¿Que es un algoritmo? | Algoritmos y caracteristicas', to:'/pEstructurada/02'},
      {icon:'', title: 'Variables, constantes y tipos de Datos', to:'/pEstructurada/03'},
      {icon:'', title: 'Datos de Entrada y Salida', to:'/pEstructurada/04'},
      {icon:'', title: 'Operaciones aritmeticos (+, -, *, /,  %)', to:'/pEstructurada/05'},
      {icon:'', title: 'Etapas de resolucion de problemas', to:'/pEstructurada/06'},
      {icon:'', title: 'Estructura If', to:'/pEstructurada'},
      {icon:'', title: 'Operadores relacionales (mayor, menor igual, distinto)', to:'/pEstructurada'},
      {icon:'', title: 'Operadores lógicos (&&, ||, !)', to:'/pEstructurada'},
      {icon:'', title: 'Ejercicios con IF', to:'/pEstructurada'},
      {icon:'', title: 'Estructura Switch', to:'/pEstructurada'},
      {icon:'', title: 'Ejercicios con Switch', to:'/pEstructurada'},
      {icon:'', title: 'Sentencia While', to:'/pEstructurada'},
      {icon:'', title: 'Ejercicios con While', to:'/pEstructurada'},
      {icon:'', title: 'Sentencia For', to:'/pEstructurada'},
      {icon:'', title: 'Ejercicios con For', to:'/pEstructurada'},
      {icon:'', title: 'Funciones y Procedimientos', to:'/pEstructurada'},
      {icon:'', title: 'Strings', to:'/pEstructurada'},
      {icon:'', title: 'Arreglos', to:'/pEstructurada'},
    ],
    recomendaciones: [
      'Tener ganas',
    ],
  }),
};
</script>