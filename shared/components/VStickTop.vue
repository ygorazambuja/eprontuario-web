<template>
  <div class="stick">
    <v-switch-theme />
  </div>
</template>

<script>
export default {
  name: 'VStickTop',
  props: {
    route: {
      type: String,
      default: '',
    },
  },
  computed: {
    hasRoute() {
      return !!this.route
    },
  },
}
</script>

<style>
.stick {
  float: left;
  position: absolute;
}
</style>
