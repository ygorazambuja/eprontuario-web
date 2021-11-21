<template>
  <v-page-template title="Configurações">
    <v-row class="mx-4 mt-5">
      <v-col cols="12" sm="12" md="6">
        <v-card elevation="12" hover ripple @click="goTo('/professores')">
          <v-card-title>Professores</v-card-title>
          <v-card-subtitle>Cadastrar e remover</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col>
        <v-card elevation="12" hover ripple @click="goTo('/academicos')">
          <v-card-title>Academicos</v-card-title>
          <v-card-subtitle>Cadastrar e Remover</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-4">
      <v-col cols="12" sm="12" md="6">
        <v-card
          elevation="12"
          hover
          ripple
          @click="goTo('configuracoes/disciplinas')"
        >
          <v-card-title>Disciplinas</v-card-title>
          <v-card-subtitle>Cadastrar e remover</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col>
        <v-card elevation="12" hover ripple @click="goTo('matriculas')">
          <v-card-title>Matriculas</v-card-title>
          <v-card-subtitle>Cadastrar e remover</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-4">
      <v-col>
        <v-card
          elevation="12"
          hover
          ripple
          @click="goTo('configuracoes/permissoes')"
        >
          <v-card-title>Painel de Permissões</v-card-title>
          <v-card-subtitle>Adiciona e Remove Permissões</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-page-template>
</template>

<script lang="ts">
import Vue from 'vue'
import { routerMixin } from '~/shared/mixins'
export default Vue.extend({
  mixins: [routerMixin],
})
</script>
VPageTemplate
<style></style>
