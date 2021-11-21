export default function ({ store, redirect }) {
  const isLoggedIn = store.getters['User/isLoggedIn']

  if (!isLoggedIn) {
    store.commit('User/setUser', null)
    store.commit('User/setToken', null)
    return redirect('/login')
  }
}
