<template>
  <v-app>
    <Nuxt></Nuxt>
    <v-loading-overlay />
    <v-custom-footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { VCustomFooter, VLoadingOverlay } from '@/shared/components'
export default Vue.extend({
  components: {
    VCustomFooter,
    VLoadingOverlay,
  },
})
</script>
