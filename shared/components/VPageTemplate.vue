<template>
  <v-container>
    <v-row class="py-2 px-4">
      <v-btn v-if="hasBackButton" icon @click="goTo">
        <v-btn class="mr-5" icon>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-btn>
      <h2>{{ title }}</h2>
    </v-row>
    <slot />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String,
      default: '',
    },
    hasBackButton: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    goTo() {
      this.$router.back()
    },
  },
})
</script>
