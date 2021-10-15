<template>
  <v-container>
    <h1>Pacientes</h1>
    <div v-for="paciente in pacientes" :key="paciente.id">
      <p>{{ paciente.nome }}</p>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    pacientes: [],
  }),

  mounted() {
    this.fetchPacientes()
  },
  methods: {
    async fetchPacientes() {
      const { data } = await this.$axios.get('api/pacientes')
      this.pacientes = data
    },
  },
}
</script>
