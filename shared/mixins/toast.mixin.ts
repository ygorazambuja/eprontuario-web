// @ts-nocheck

import Vue from 'vue'
export default Vue.extend({
  methods: {
    createSuccessToast(message: string) {
      this.$toast.success(message, {
        title: 'Success',
        variant: 'success',
        duration: 2000,
      })
    },
    createErrorToast(message: string) {
      this.$toast.error(message, {
        title: 'Error',
        variant: 'error',
        duration: 2000,
      })
    },
  },
})
