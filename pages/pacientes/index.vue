<template>
  <v-page-template title="Pacientes">
    <v-row justify="end">
      <v-btn color="success" @click="goTo('/pacientes/novo-paciente')">
        Adicionar Novo
      </v-btn>
    </v-row>

    <v-card class="my-5">
      <v-data-table :items="pacientes" :headers="getTableHeader">
        <template v-slot:item.cpf="{ item }">
          <v-text-field v-mask="'###.###.###-##'" readonly :value="item.cpf" />
        </template>
        <template v-slot:item.acoes="{ item }">
          <v-btn icon class="ml-2" @click="goTo(`pacientes/${item.id}`)">
            <v-icon class="ml-2" small> mdi-arrow-right </v-icon>
          </v-btn>
          <v-btn
            class="ml-2"
            icon
            @click="goTo(`paciente/editar-paciente/${item.id}`)"
          >
            <v-icon small> mdi-pencil </v-icon>
          </v-btn>
          <v-btn class="ml-2" icon @click="handleDeletePaciente(item)">
            <v-icon small> mdi-delete </v-icon>
            <v-dialog v-model="dialog" width="500" height="400">
              <v-card>
                <v-card-title>
                  Desejar Realmente Remover o paciente ?
                </v-card-title>
                <v-card-actions>
                  <v-btn @click="dialog = false"> Cancelar </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn @click="deletePaciente(item)"> Confirmar </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-page-template>
</template>

<script>
import Vue from 'vue'
import { mapMutations } from 'vuex'
import { routerMixin } from '~/shared/mixins'
export default Vue.extend({
  mixins: [routerMixin],

  data: () => ({
    pacientes: [],
    dialog: false,
  }),

  computed: {
    getTableHeader() {
      return [
        {
          text: 'Nome',
          value: 'nome',
        },
        {
          text: 'Genero',
          value: 'genero',
        },
        { text: 'Cpf', value: 'cpf' },
        {
          text: 'Ações',
          value: 'acoes',
        },
      ]
    },
  },

  mounted() {
    this.fetchPacientes()
  },

  methods: {
    ...mapMutations('shared', ['toggleLoadingOverlay']),

    async fetchPacientes() {
      this.toggleLoadingOverlay()
      const { data } = await this.$axios.get('api/pacientes')
      this.pacientes = data
      this.toggleLoadingOverlay()
    },
  },
})
</script>
