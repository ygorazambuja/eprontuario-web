<template>
  <v-main>
    <v-container fluid>
      <v-stick-top />
      <v-logo />
      <v-layout justify-center>
        <v-flex xs12 sm8 md5>
          <v-card
            class="elevation-12 py-3 px-5 flex-column align-center"
            shaped
          >
            <v-card-title class="py-5 mx-auto">
              <h4 class="text--primary">E-Prontuario</h4>
            </v-card-title>

            <v-card-text>
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
              <v-layout justify-center>
                <v-btn
                  large
                  color="primary"
                  class="mr-1"
                  data-cy="btn-next"
                  @click="doLogin"
                >
                  Entrar
                </v-btn>
                <NuxtLink to="/login/cadastro">
                  <v-btn
                    data-cy="btn-register"
                    large
                    color="primary"
                    outlined
                    class="ml-1"
                  >
                    Registrar
                  </v-btn>
                </NuxtLink>
              </v-layout>
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

import { mapActions } from 'vuex'
import { VLogo, VStickTop } from '~/shared/components'
import { SharedActions } from '~/store/shared'

export default {
  components: { VStickTop, VLogo },
  mixins: [validationMixin],
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

  methods: {
    ...mapActions('shared', [SharedActions.toggleLoadingOverlay]),
    doLogin() {
      this.$v.$touch()
      if (this.$v.$invalid) return

      this.toggleLoadingOverlay(true)

      setTimeout(() => {
        this.toggleLoadingOverlay(false)
      }, 2000)
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
