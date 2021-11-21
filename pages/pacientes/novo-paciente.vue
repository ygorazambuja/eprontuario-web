<template>
  <v-container>
    <v-title route="/pacientes" :title="getTitle" />
    <v-card elevation="10" class="pa-4 mt-4">
      <v-card-text class="pl-0">
        <strong>
          Preencha os campos abaixo para adicionar um novo paciente
        </strong>
      </v-card-text>
      <v-form ref="form" v-model="valid" @submit.prevent="saveAndContinue">
        <div class="row">
          <div class="col">
            <v-text-field
              v-model="nome"
              label="Nome"
              required
              :rules="rules.nome"
              outlined
            />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <v-text-field
              v-model="cpf"
              v-mask="'###.###.###-##'"
              label="CPF"
              required
              :rules="rules.cpf"
              outlined
            />
          </div>
          <div class="col-md-6">
            <v-select
              v-model="gender"
              :items="constantsGender"
              label="Sexo"
              required
              :rules="rules.gender"
              outlined
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-sm-12">
            <v-btn color="error" outlined @click="goBack">Cancelar</v-btn>
          </div>

          <div class="col-md-10 col-sm-12">
            <v-btn
              color="success"
              :disabled="!valid"
              style="float: right"
              @click="saveAndExit"
            >
              Salvar
            </v-btn>

            <v-btn
              class="mr-1"
              color="success"
              :disabled="!valid"
              style="float: right"
              outlined
              @click="saveAndContinue"
            >
              Salvar e Continuar
            </v-btn>
          </div>
        </div>
      </v-form>
      <v-overlay :value="loading">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

import { LAYOUT } from '~/constants'
import { Paciente } from '~/interfaces/paciente'
import { toastMixin } from '~/shared/mixins'

import { CreatePacienteUseCase } from '~/usecases/paciente/CreatePacienteUseCase'
export default Vue.extend({
  name: 'NovoPaciente',
  mixins: [toastMixin],
  layout: LAYOUT.default,
  data: () => ({
    nome: '',
    cpf: '',
    gender: '',
    loading: false,
    valid: false,
    rules: {
      nome: [
        (v) => !!v || 'Nome é obrigatório',
        (v) => v.length <= 100 || 'Nome deve ter no máximo 100 caracteres',
      ],
      cpf: [
        (v) => !!v || 'CPF é obrigatório',
        (v) => v.length === 14 || 'CPF deve ter 14 caracteres',
      ],
      gender: [(v) => !!v || 'Sexo é obrigatório'],
    },
    constantsGender: [
      { text: 'Masculino', value: 'M' },
      { text: 'Feminino', value: 'F' },
    ],
  }),

  computed: {
    getTitle() {
      return 'Novo Paciente'
    },
  },
  methods: {
    async saveAndContinue() {
      await this.createPacienteAsync()
      this.cleanupForm()
    },
    async saveAndExit() {
      await this.createPacienteAsync()
      this.goBack()
    },

    goBack() {
      this.$router.push('/pacientes')
    },

    async createPacienteAsync() {
      const paciente: Omit<Paciente, 'id'> = {
        nome: this.nome,
        cpf: this.cpf,
        genero: this.gender,
      }

      try {
        await new CreatePacienteUseCase(paciente, this.$axios).execute()
        this.createSuccessToast('Paciente Adicionado')
      } catch (error) {
        this.createErrorToast('Paciente não pode ser adicionado')
      }
    },

    cleanupForm() {
      this.nome = ''
      this.cpf = ''
      this.gender = ''

      this.$refs.form.resetValidation()
    },
  },
})
</script>

<style></style>
