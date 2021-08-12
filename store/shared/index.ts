import { createModule, mutation } from 'vuex-class-component'

export default class SharedStore extends createModule({
  target: 'nuxt',
  namespaced: 'shared',
}) {
  isDark = true
  loadingOverlay = false
  drawerState = false
  activeTabBar = 'HOME'

  @mutation toggleTheme() {
    this.isDark = !this.isDark
  }

  @mutation toggleLoadingOverlay() {
    this.loadingOverlay = !this.loadingOverlay
  }

  @mutation
  toggleDrawerState() {
    this.drawerState = !this.drawerState
  }

  @mutation
  setActiveTabBar(tabBar: string) {
    this.activeTabBar = tabBar
  }
}
