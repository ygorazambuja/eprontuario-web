<template>
  <div class="stick">
    <v-switch-theme />
  </div>
</template>

<script>
import { VSwitchTheme } from '~/shared/components'
export default {
  name: 'VStickTop',
  components: { VSwitchTheme },
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
