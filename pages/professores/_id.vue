<template>
  <v-container>
    <v-title route="/professores" :title="getTitle" />

    <v-card elevation="5" class="my-5">
      <v-card-title> Nome: {{ professor.nome }} </v-card-title>
      <v-card-subtitle>
        <!-- Cpf: {{ professor.cpf }} -->
        <hr />
        <!-- Genero: {{ professor.genero }} -->
      </v-card-subtitle>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

import { mapMutations } from 'vuex'

import { Professor } from '~/interfaces'
export default Vue.extend({
  name: 'ProfessorID',

  data: () => ({
    id: '',
    professor: {} as Professor,
  }),

  computed: {
    getTitle() {
      return `Professor ${this.professor.nome || ''}`
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
      const { data } = await this.$axios.get('api/professores/' + this.id)
      this.professor = data
      this.toggleLoadingOverlay()
    },
  },
})
</script>
