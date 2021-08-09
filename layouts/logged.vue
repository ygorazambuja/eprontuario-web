<template>
  <v-app>
    <v-app-bar app clipped-right flat height="72" color="primary" dark>
      <v-btn v-if="smallScreenAndDown" icon app @click="toggleDrawer">
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
      @input="toggleDrawer"
    >
      <v-card width="100%">
        <v-avatar size="48"> </v-avatar>
        <v-card-title>Ygor Azambuja</v-card-title>
        <v-card-subtitle>ygorazambuja@gmail.com</v-card-subtitle>
      </v-card>

      <v-list shaped>
        <v-list-item-group :value="activeTabBar" @change="toggleActiveTabBar">
          <v-list-item value="HOME">
            <v-list-item-title> Home </v-list-item-title>
          </v-list-item>
          <v-list-item value="DOCUMENTOS">
            <v-list-item-title> Documento </v-list-item-title>
          </v-list-item>
          <v-list-item value="PACIENTES">
            <v-list-item-title>Pacientes</v-list-item-title>
          </v-list-item>
          <v-list-item value="DISCIPLINAS">
            <v-list-item-title> Disciplinas </v-list-item-title>
          </v-list-item>
          <v-list-item v-if="isProfessor" v-show="false" value="MATRICULAS">
            <v-list-item-title> Matriculas </v-list-item-title>
          </v-list-item>
          <v-list-item value="SUGESTOES">
            <v-list-item-title> Sugestões </v-list-item-title>
          </v-list-item>
          <v-list-item v-if="isProfessor" value="CONFIGURACOES">
            <v-list-item-title>Configurações </v-list-item-title>
          </v-list-item>
          <v-list-item @click="doLogout">
            <v-list-item-title> Sair </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <Nuxt />
    </v-main>
    <v-custom-footer />
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import {
  VSwitchTheme,
  VCustomFooter,
  VAutoCompleteInput,
} from '~/shared/components'
import { SharedActions, SharedState } from '~/store/shared'
import { mediaQueryMixin } from '~/shared/mixins'
export default {
  components: {
    VSwitchTheme,
    VCustomFooter,
    VAutoCompleteInput,
  },
  mixins: [mediaQueryMixin],
  data: () => ({
    isLogin: true,
  }),
  computed: {
    ...mapState('shared', [SharedState.activeTabBar, SharedState.drawerState]),
    isProfessor() {
      return true
    },
  },

  methods: {
    ...mapActions('shared', [
      SharedActions.toggleDrawer,
      SharedActions.toggleActiveTabBar,
    ]),
    doLogout() {},
  },
}
</script>
