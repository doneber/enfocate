<template>
  <div>
    <p class="display-2 text-center">Bienvenido</p>
    <v-row>
      <v-col md="4">
          <v-card
          to="/poo"
            color="#385F73"
            dark
          >
            <v-card-title class="headline">POO</v-card-title>

            <v-card-subtitle>Programación Orientada a Objetos</v-card-subtitle>

            <v-card-actions>
              <v-btn text>Curiosea ahora</v-btn>
            </v-card-actions>
          </v-card>
      </v-col>
      <v-col md="4">
          <v-card
          disabled
          :color="this.$vuetify.theme.dark?'grey darken-1':'grey lighten-1'"
          >
            <v-card-title class="">Programación Funcional</v-card-title>

            <v-card-subtitle>No disponible</v-card-subtitle>

            <v-card-actions>
              <v-btn text>No disponible</v-btn>
            </v-card-actions>
          </v-card>
      </v-col>

    </v-row>

  </div>
</template>