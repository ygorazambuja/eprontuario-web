export default function ({ store, redirect }) {
  const isAdmin = store.getters['User/isUserAdmin']

  if (!isAdmin) {
    redirect('/')
  }
}
