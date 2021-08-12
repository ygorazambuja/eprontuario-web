<template>
  <v-app>
    <v-app-bar />
    <v-main>
      <Nuxt />
    </v-main>
    <v-custom-footer />
  </v-app>
</template>

<script>
import { VCustomFooter, VAppBar } from '~/shared/components'
export default {
  components: {
    VCustomFooter,
    VAppBar,
  },
}
</script>
