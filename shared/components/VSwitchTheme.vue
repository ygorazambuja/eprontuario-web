<template>
  <v-btn icon @click="changeTheme">
    <v-icon>{{ isDark ? 'mdi-weather-night' : 'mdi-weather-sunny' }}</v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
export default Vue.extend({
  name: 'VSwitchTheme',
  computed: {
    ...mapState('shared', ['isDark']),
  },
  mounted() {
    console.log(this)
    this.$vuetify.theme.dark = this.isDark
  },
  methods: {
    ...mapActions('shared', ['toggleTheme']),
    changeTheme() {
      this.toggleTheme(!this.isDark)
      this.$vuetify.theme.dark = this.isDark
    },
  },
})
</script>
