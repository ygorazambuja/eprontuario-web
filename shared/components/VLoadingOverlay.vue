<template>
  <v-overlay :value="loadingOverlay">
    <v-progress-circular indeterminate size="64"></v-progress-circular>
  </v-overlay>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'VLoadingOverlay',
  computed: {
    ...mapState('shared', ['loadingOverlay']),
  },
}
</script>
