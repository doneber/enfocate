<template>
  <div>
          <v-container>
        <v-row justify="center">
          <v-col md="10">

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
          to="/android"
          :color="this.$vuetify.theme.dark?'green darken-3':'green darken-2'"
          dark
          >
            <v-card-title class="headline">Android</v-card-title>

            <v-card-subtitle>Android básico para principiantes</v-card-subtitle>

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
            <v-card-title class="">Prog. Funcional</v-card-title>

            <v-card-subtitle>Programación Funcional en Java</v-card-subtitle>

            <v-card-actions>
              <v-btn text>No disponible</v-btn>
            </v-card-actions>
          </v-card>
      </v-col>

    </v-row>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>