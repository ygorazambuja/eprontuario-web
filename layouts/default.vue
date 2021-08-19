<template>
  <v-app>
    <v-app-bar></v-app-bar>
    <v-switch-theme />

    <v-main>
      <Nuxt />
    </v-main>
    <v-custom-footer />
  </v-app>
</template>

<script>
import { VCustomFooter, VSwitchTheme } from '~/shared/components'
import VAppBar from '~/shared/components/VAppBar.vue'
export default {
  components: {
    VCustomFooter,
    VSwitchTheme,
    VAppBar,
  },
}
</script>
