<template>
  <v-row class="mt-5">
    <NuxtLink :to="route">
      <v-btn class="mr-5" icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </NuxtLink>
    <h2>{{ title }}</h2>
  </v-row>
</template>

<script>
export default {
  name: 'VTitle',
  props: {
    title: {
      type: String,
      default: '',
    },
    route: {
      type: String,
      default: '',
    },
  },
}
</script>
