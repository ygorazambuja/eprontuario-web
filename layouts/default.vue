<template>
  <v-app>
    <v-my-app-bar></v-my-app-bar>
    <v-switch-theme />

    <v-main>
      <Nuxt />
    </v-main>
    <v-loading-overlay />
    <v-custom-footer />
  </v-app>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  middleware: ['auth'],
})
</script>
