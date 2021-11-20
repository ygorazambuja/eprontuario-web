<template>
  <v-container>
    <v-title route="/pacientes" :title="getTitle" />

    <v-card elevation="5" class="my-5">
      <v-card-title> Nome: {{ paciente.nome }} </v-card-title>
      <v-card-subtitle>
        Cpf: {{ paciente.cpf }}
        <hr />
        Genero: {{ paciente.genero }}
      </v-card-subtitle>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

import { mapMutations } from 'vuex'

import { Paciente } from '~/interfaces'
export default Vue.extend({
  name: 'PacienteID',

  data: () => ({
    id: '',
    paciente: {} as Paciente,
  }),

  computed: {
    getTitle() {
      return `Paciente ${this.paciente.nome || ''}`
    },
  },

  mounted() {
    this.id = this.$route.params.id
    this.fetchPacientByID()
  },

  methods: {
    ...mapMutations('shared', ['toggleLoadingOverlay']),
    async fetchPacientByID() {
      this.toggleLoadingOverlay()
      const { data } = await this.$axios.get('api/pacientes/' + this.id)
      this.paciente = data
      this.toggleLoadingOverlay()
    },
  },
})
</script>
