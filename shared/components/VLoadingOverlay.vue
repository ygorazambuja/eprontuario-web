<template>
  <v-overlay :value="loadingOverlay">
    <v-progress-circular indeterminate size="64"></v-progress-circular>
  </v-overlay>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
export default Vue.extend({
  name: 'VLoadingOverlay',
  computed: {
    ...mapState('shared', ['loadingOverlay']),
  },
})
</script>
