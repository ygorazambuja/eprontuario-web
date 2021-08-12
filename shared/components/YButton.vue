<template>
  <v-btn @click="onClick">{{ content }}</v-btn>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

type Person = {
  name: string
}

export default Vue.extend({
  props: {
    content: {
      type: String,
      required: true,
    },
    person: {
      type: Object,
      default: () => ({}),
      required: false,
    } as PropOptions<Pick<Person, 'name'>>,
    onClick: { type: Function },
  },

  mounted() {},
  methods: {},
})
</script>
