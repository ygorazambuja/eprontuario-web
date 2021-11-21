<template>
  <div>
    <v-app-bar app clipped-right flat height="72" color="primary" dark>
      <v-btn v-if="smallScreenAndDown" icon app @click="changeDrawerState()">
        <v-icon> mdi-menu </v-icon>
      </v-btn>
      <v-spacer />

      <v-auto-complete-input />
      <v-switch-theme />
    </v-app-bar>

    <v-navigation-drawer
      app
      width="290"
      :value="drawerState"
      :permanent="mediumScreenAndUp"
    >
      <v-card width="100%">
        <v-avatar size="48"> </v-avatar>
        <v-card-title>{{ user.name }}</v-card-title>
        <v-card-subtitle>{{ user.email }}</v-card-subtitle>
      </v-card>

      <v-list shaped>
        <v-list-item-group :value="activeTabBar" @change="changeActiveTabBar">
          <v-list-item value="HOME">
            <v-list-item-icon>
              <v-icon> mdi-home </v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item value="DOCUMENTOS">
            <v-list-item-title>Documento</v-list-item-title>
          </v-list-item>
          <v-list-item value="PACIENTES">
            <v-list-item-title>Pacientes</v-list-item-title>
          </v-list-item>
          <v-list-item value="DISCIPLINAS">
            <v-list-item-title>Disciplinas</v-list-item-title>
          </v-list-item>
          <v-list-item v-if="user.admin" value="MATRICULAS">
            <v-list-item-title>Matriculas</v-list-item-title>
          </v-list-item>
          <v-list-item value="SUGESTOES">
            <v-list-item-title>Sugestões</v-list-item-title>
          </v-list-item>
          <v-list-item v-if="user.admin" value="CONFIGURACOES">
            <v-list-item-title>Configurações</v-list-item-title>
          </v-list-item>
          <v-list-item value="LOGOUT" @click="handleLogoutClick">
            <v-list-item-title>Sair</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
import { mediaQueryMixin, toastMixin } from '~/shared/mixins'

export default Vue.extend({
  name: 'VMyAppBar',
  mixins: [mediaQueryMixin, toastMixin],
  computed: {
    ...mapState('shared', ['drawerState', 'isDark', 'activeTabBar']),
    ...mapState('User', ['user']),
  },

  methods: {
    ...mapMutations('shared', ['toggleDrawer', 'toggleActiveTabBar']),
    ...mapMutations('User', ['doLogout']),
    handleLogoutClick() {
      this.doLogout()

      this.createSuccessToast('Você saiu com sucesso!')

      this.routerToPage(this.activeTabBar)
    },
    changeDrawerState() {
      this.toggleDrawer()
    },
    changeActiveTabBar(value: string) {
      if (value) this.routerToPage(value)
      if (value && value !== this.activeTabBar) {
        this.toggleActiveTabBar(value)
        this.routerToPage(this.activeTabBar)
      }
    },

    getCorrectRoute(key: string) {
      const ROUTES = {
        HOME: '/',
        DOCUMENTOS: '/documentos',
        PACIENTES: '/pacientes',
        DISCIPLINAS: '/disciplinas',
        MATRICULAS: '/matriculas',
        SUGESTOES: '/sugestoes',
        CONFIGURACOES: '/configuracoes',
        LOGOUT: '/login',
      }
      return ROUTES[key]
    },

    routerToPage(activeBar: string) {
      this.$router.push(this.getCorrectRoute(activeBar))
    },
  },
})
</script>

<style></style>
