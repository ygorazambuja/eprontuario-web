<template>
  <v-container>
    <v-title title="Professores" route="/configuracoes" />
    <v-row justify="end" class="mr-5 mb-5">
      <v-btn color="success" @click="goTo('/novo-professor')" v-if="false">
        Adicionar Professor
      </v-btn>
    </v-row>
    <v-card class="m-3" elevation="5">
      <v-data-table :headers="headers" :items="professores" :options="options">
        <template v-slot:item.acoes="{ item }">
          <tr>
            <td>
              <div style="float: right">
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon @click="goTo(`/professores/${item.id}`)">
                      <v-icon color="primary" dark v-bind="attrs" v-on="on">
                        mdi-arrow-right
                      </v-icon>
                    </v-btn>
                  </template>
                  <span>Acessar Professor</span>
                </v-tooltip>

                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon @click="goTo(`/editar-professor/${item.id}`)">
                      <v-icon color="warning" dark v-bind="attrs" v-on="on">
                        mdi-pencil
                      </v-icon>
                    </v-btn>
                  </template>
                  <span>Editar Professor</span>
                </v-tooltip>

                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon @click="handleDeleteProfessor(item)">
                      <v-icon color="error" dark v-bind="attrs" v-on="on">
                        mdi-delete
                      </v-icon>
                    </v-btn>
                  </template>
                  <span>Deletar Professor</span>
                </v-tooltip>
              </div>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
import { routerMixin } from '~/shared/mixins'
export default {
  mixins: [routerMixin],
  data: () => ({
    headers: [
      { text: 'Nome', value: 'nome' },
      { text: 'Ações', value: 'acoes' },
    ],
    options: {},
    professores: [],
  }),

  mounted() {
    this.loadProfessores()
  },

  methods: {
    ...mapMutations('shared', ['toggleLoadingOverlay']),
    async loadProfessores() {
      this.toggleLoadingOverlay()
      const { data } = await this.$axios.get('api/professores')
      this.toggleLoadingOverlay()
      this.professores = data
    },
  },
}
</script>

<style></style>
