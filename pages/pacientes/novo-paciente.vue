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

<script>
import Vue from 'vue'

import { LAYOUT } from '~/constants'
import VTitle from '~/shared/components/VTitle.vue'

export default Vue.extend({
  name: 'NovoPaciente',
  components: { VTitle },
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
    saveAndContinue() {},
    saveAndExit() {},
    goBack() {},
  },
})
</script>

<style></style>
