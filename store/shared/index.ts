import { VuexModule, Module, Mutation } from 'vuex-module-decorators'

@Module({
  namespaced: true,
  name: 'shared',
})
export default class Shared extends VuexModule {
  isDark = true
  activeTabBar = 'HOME'
  loadingOverlay = false
  drawerState = false

  @Mutation
  toggleTheme() {
    this.isDark = !this.isDark
  }

  @Mutation
  toggleDrawer() {
    this.drawerState = !this.drawerState
  }

  @Mutation
  toggleActiveTabBar(tabBar: string) {
    this.activeTabBar = tabBar
  }

  @Mutation
  toggleLoadingOverlay() {
    this.loadingOverlay = !this.loadingOverlay
  }
}
