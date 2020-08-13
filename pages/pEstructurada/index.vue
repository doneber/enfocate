<template>
  <div>
    <v-container :class="[!this.$vuetify.breakpoint.xs?'padding-blog':'px-3']">
      <p class="display-1 text-center font-weight-black">Programación Estructurada</p>
      <p>Esta serie de documentos serán una introducción a la programación en general. Se abarcarán conceptos básicos</p>

      <p>Recomendaciones:</p>
      <ul>
        <li v-for="(req, index) in recomendaciones" :key="index+'reqsAndroid'">{{req}}</li>
      </ul>
      <br>
      <p>Contenido:</p>
      <v-card color="primary" class="elevation-1" disabled>
        <v-list-item v-for="([icon, text,to], index) in items" :key="index" link :to="to">
          <v-list-item-content>
            <v-list-item-title>{{index+1}}. {{ text }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
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
      ["", "Introducción", ""],
      ["", "¿Que es un algoritmo? | Algoritmos y caracteristicas", ""],
      ["", "Variables, constantes y tipos de Datos", ""],
      ["", "Datos de Entrada y Salida", ""],
      ["", "Operaciones aritmeticos (+, -, *, /,  %)", ""],
      ["", "Que es un diagrama de flujo (Inicio, Fin, Entrada Proceso, Salida)?", ""],
      ["", "Etapas de resolucion de problemas", ""],
      ["", "Estructura If", ""],
      ["", "Operadores relacionales (mayor, menor igual, distinto)", ""],
      ["", "Operadores lógicos (&&, ||, !)", ""],
      ["", "Ejercicios con IF", ""],
      ["", "Estructura Switch", ""],
      ["", "Ejercicios con Switch", ""],
      ["", "Sentencia While", ""],
      ["", "Ejercicios con While", ""],
      ["", "Sentencia For", ""],
      ["", "Ejercicios con For", ""],
      ["", "Funciones y Procedimientos", ""],
      ["", "Strings", ""],
      ["", "Arreglos", ""],
    ],
    recomendaciones: [
      "Tener ganas",
    ],
  }),
};
</script>