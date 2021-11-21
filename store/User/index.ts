import { Module, Mutation, VuexModule } from 'vuex-module-decorators'

interface IUser {
  id: number
  name: string
  username: string
  email: string
  admin?: boolean
}

@Module({
  namespaced: true,
  name: 'User',
})
export default class User extends VuexModule {
  token: string = ''
  user: Partial<IUser> = {}

  @Mutation
  setToken(token: string) {
    this.token = token
  }

  @Mutation
  setUser(user: Partial<IUser>) {
    this.user = user
  }

  @Mutation
  doLogout() {
    this.token = ''
    this.user = {}
  }

  get isLoggedIn() {
    return !!this.token
  }

  get isUserAdmin() {
    return this.user?.admin || false
  }
}
