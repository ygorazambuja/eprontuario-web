<template>
  <v-btn icon @click="changeTheme">
    <v-icon>{{ isDark ? 'mdi-weather-night' : 'mdi-weather-sunny' }}</v-icon>
  </v-btn>
</template>

<script lang="tsx">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'

export default Vue.extend({
  name: 'VSwitchTheme',
  computed: {
    ...mapState('shared', ['isDark']),
  },
  mounted() {
    this.$vuetify.theme.dark = this.isDark
  },
  methods: {
    ...mapMutations('shared', ['toggleTheme']),
    changeTheme() {
      this.toggleTheme()
      this.$vuetify.theme.dark = this.isDark
    },
  },
})
</script>
