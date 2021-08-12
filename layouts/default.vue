<template>
  <v-app>
    <v-switch-theme />
    <v-main>
      <Nuxt />
    </v-main>
    <v-custom-footer />
  </v-app>
</template>

<script>
import { VCustomFooter, VSwitchTheme } from '~/shared/components'
export default {
  components: {
    VCustomFooter,
    VSwitchTheme,
  },
}
</script>
