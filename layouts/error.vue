<template>
  <v-container>
    <h2>Algo ocorreu fora do Comum</h2>

    <h4>Você será redirecionado para a pagina de Login</h4>

    <v-loading-overlay />
  </v-container>
</template>

<script>
export default {
  layout: 'unlogged',
  mounted() {
    this.redirectToLoginInTwoSeconds()
  },
  methods: {
    redirectToLoginInTwoSeconds() {
      // setTimeout(() => {
      //   this.$router.push('/login')
      // }, 2000)
    },
  },
}
</script>

<style></style>
