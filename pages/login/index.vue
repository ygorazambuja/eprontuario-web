<template>
  <v-main>
    <v-container fluid>
      <v-stick-top />
      <v-logo />
      <h1 class="text--primary pb-2" style="text-align: center">
        E-Prontuario
      </h1>

      <v-layout justify-center>
        <v-flex xs12 sm8 md5>
          <v-card
            rounded
            class="elevation-12 py-3 px-5 flex-column align-center"
          >
            <v-card-text class="pa-2">
              <v-form>
                <v-text-field
                  v-model="form.email"
                  class="email-form"
                  name="email"
                  label="Email"
                  :error-messages="getEmailErrors"
                  data-cy="email"
                  outlined
                  filled
                  dense
                />
                <v-text-field
                  v-model="form.password"
                  outlined
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  data-cy="password"
                  label="Senha"
                  :error-messages="getPasswordErrors"
                  filled
                  dense
                  @keypress.enter="doLogin"
                  @click:append="showPassword = !showPassword"
                />
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-col>
                <v-row class="mb-2">
                  <v-btn
                    color="primary"
                    data-cy="btn-next"
                    block
                    @click="doLogin"
                  >
                    Entrar
                  </v-btn>
                </v-row>
                <v-row class="mb-2">
                  <v-btn
                    data-cy="btn-register"
                    color="primary"
                    outlined
                    block
                    @click="goTo('/login/cadastro')"
                  >
                    Registrar
                  </v-btn>
                </v-row>
              </v-col>
            </v-card-actions>
            <v-row justify="center" class="ma-2">
              <NuxtLink to="esqueci-a-senha"> Esqueceu a Senha ? </NuxtLink>
            </v-row>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength } from 'vuelidate/lib/validators'

import { mapMutations, mapGetters } from 'vuex'
import { routerMixin, toastMixin } from '~/shared/mixins'
import { createToastErrorMessage } from '~/shared/helpers/createToastErrorMessage'
export default {
  mixins: [validationMixin, toastMixin, routerMixin],
  layout: 'unlogged',
  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
  },
  data: () => ({
    showPassword: false,
    form: {
      email: '',
      password: '',
    },
  }),

  computed: {
    ...mapGetters('User', ['isLoggedIn']),
    getEmailErrors() {
      return this.$v.form.email.$error && !this.$v.form.email.required
        ? 'Campo obrigatório'
        : this.$v.form.email.$error && !this.$v.form.email.email
        ? 'Email inválido'
        : ''
    },
    getPasswordErrors() {
      return this.$v.form.password.$error && !this.$v.form.password.required
        ? 'Campo obrigatório'
        : this.$v.form.password.$error && !this.$v.form.password.minLength
        ? 'A senha deve ter no mínimo 6 caracteres'
        : ''
    },
  },

  mounted() {
    this.redirectUserIfLoggedIn()
  },

  methods: {
    ...mapMutations('shared', ['toggleLoadingOverlay']),
    ...mapMutations('User', ['setUser', 'setToken']),
    async doLogin() {
      this.$v.$touch()
      if (this.$v.$invalid) return

      try {
        this.toggleLoadingOverlay(true)
        const { data } = await this.$axios.post('api/login', this.form)

        const { token, user } = data

        this.setUser(user)
        this.setToken(token)

        this.createSuccessToast('Login realizado com sucesso!')
        this.goTo('/')
      } catch (error) {
        const errors = createToastErrorMessage(error)
        errors.map((error) => this.createErrorToast(error))
      } finally {
        this.toggleLoadingOverlay(false)
      }
    },
    goTo(route) {
      this.$router.push(route)
    },
    redirectUserIfLoggedIn() {
      if (this.isLoggedIn) {
        this.goTo('/')
      }
    },
  },
}
</script>

<style>
.login-title {
  display: flex;
  justify-content: center;
  align-content: center;
}
.login-title h1 {
  color: #0088b7;
}
</style>
