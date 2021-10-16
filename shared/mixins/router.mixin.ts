import Vue from 'vue'

export const router = Vue.extend({
  methods: {
    goTo(path: string) {
      this.$router.push(path)
    },
  },
})

export default router
