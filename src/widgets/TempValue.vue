<template>
  <v-card height="120px" class="d-flex justify-left align-center">
    <v-sheet
      tile
      elevation="0"
      width="30%"
      height="100%"
      color="primary"
      class="d-flex flex-column justify-center align-center"
    >
      <v-icon size="50" color="white">mdi-home-thermometer-outline</v-icon>
      <v-text class="pt-1 d-flex justify-center align-top white--text">温度</v-text>
    </v-sheet>
    <v-sheet
      tile
      elevation="0"
      height="100%"
      width="70%"
      class="d-flex align-center justify-center"
    >
      <v-card class="d-flex flex-column justify-center align-center" flat tile height="100%">
        <v-card-text class="display-3 pa-2 primary--text font-weight-light">21.6</v-card-text>
        <v-card-text class="pa-0 headline d-flex justify-center align-top grey--text">°C</v-card-text>
      </v-card>
    </v-sheet>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>