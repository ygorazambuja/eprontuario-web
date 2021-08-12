// interface State {
//   isDark: boolean
//   loadingOverlay: boolean
//   drawerState: boolean
//   activeTabBar: string
// }

// export const state = (): State => ({
//   isDark: true,
//   loadingOverlay: false,
//   drawerState: false,
//   activeTabBar: 'HOME',
// })

// export const actions = {
//   toggleTheme({ commit }: any, payload: boolean) {
//     commit(SharedActions.toggleTheme, payload)
//   },
//   toggleLoadingOverlay({ commit }: any, payload: boolean) {
//     commit(SharedActions.toggleLoadingOverlay, payload)
//   },
//   toggleDrawer({ commit }: any, payload: boolean) {
//     commit(SharedActions.toggleDrawer, payload)
//   },
//   toggleActiveTabBar({ commit }: any, payload: string) {
//     commit(SharedActions.toggleActiveTabBar, payload)
//   },
// }

// export const mutations = {
//   toggleTheme(state: State, payload: boolean) {
//     state.isDark = payload
//   },
//   toggleLoadingOverlay(state: State, payload: boolean) {
//     state.loadingOverlay = payload
//   },
//   toggleDrawer(state: State, payload: boolean) {
//     state.drawerState = payload
//   },
//   toggleActiveTabBar(state: State, payload: string) {
//     state.activeTabBar = payload
//   },
// }

// export const SharedActions = {
//   toggleTheme: 'toggleTheme',
//   toggleLoadingOverlay: 'toggleLoadingOverlay',
//   toggleDrawer: 'toggleDrawer',
//   toggleActiveTabBar: 'toggleActiveTabBar',
// }

// export const SharedState = {
//   isDark: 'isDark',
//   loadingOverlay: 'loadingOverlay',
//   drawerState: 'drawerState',
//   activeTabBar: 'activeTabBar',
// }
