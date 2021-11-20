<template>
  <v-row class="py-2 px-4">
    <v-btn icon @click="goTo">
      <v-btn class="mr-5" icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </v-btn>
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
  methods: {
    goTo() {
      this.$router.push(this.route)
    },
  },
}
</script>
