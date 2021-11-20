<template>
  <v-layout align-center justify-center class="pa-5 mb-5">
    <v-img
      max-width="300px"
      max-height="140px"
      :src="getCorrectLogoTheme()"
      contain
    />
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
export default Vue.extend({
  name: 'VLogo',
  computed: {
    ...mapState('shared', ['isDark']),
  },
  methods: {
    getCorrectLogoTheme() {
      return !this.isDark
        ? require('@/assets/ufms_logo_negativo_assinatura_vertical_rgb.png')
        : require('@/assets/ufms_logo_positivo_assinatura_vertical_rgb.png')
    },
  },
})
</script>

<style scoped></style>
