<template>
  <v-card height="120px" class="d-flex justify-left align-center">
    <v-sheet
      tile
      elevation="0"
      width="30%"
      height="100%"
      color="green"
      class="d-flex justify-center align-center"
    >
      <v-icon size="50" color="white">mdi-water-percent</v-icon>
    </v-sheet>
    <v-sheet
      tile
      elevation="0"
      height="100%"
      width="70%"
      class="d-flex align-center justify-center"
    >
      <v-card class="d-flex flex-column justify-center align-center" flat tile height="100%">
        <v-card-text class="display-3 pa-2 green--text font-weight-light">64.1</v-card-text>
        <v-card-text class="pa-0 headline d-flex justify-center align-top grey--text">%</v-card-text>
      </v-card>
    </v-sheet>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>