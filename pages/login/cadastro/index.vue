<template>
  <v-main>
    <v-container>
      <v-stick-top route="/login" />
      <v-logo />
      <v-layout align-center justify-center>
        <v-flex md12 sm12>
          <v-card class="pa-2" elevation="12">
            <v-card-title class="px-2 py-5 mx-auto">
              <h2>Cadastro</h2>
            </v-card-title>
            <v-card-subtitle class="py-6">
              <span>
                Para prosseguirmos precisaremos concluir algumas etapas
              </span>
            </v-card-subtitle>
            <v-card-text>
              <v-form @submit.prevent="handleFormSubmit">
                <v-row class="ma-0">
                  <v-col class="pa-1" cols="12" sm="12" md="6">
                    <v-text-field
                      v-model="form.name"
                      label="Nome"
                      dense
                      outlined
                      :error-messages="getNameError"
                      data-cy="nome"
                    />
                  </v-col>
                  <v-col sm="12" md="6" class="pa-1">
                    <v-text-field
                      v-model="form.rga"
                      :error-messages="getRgaError"
                      dense
                      label="RGA"
                      outlined
                      data-cy="rga"
                    />
                  </v-col>
                </v-row>
                <v-row class="ma-0 pa-0">
                  <v-col sm="12" md="12" class="pa-1">
                    <v-text-field
                      v-model="form.email"
                      dense
                      outlined
                      :error-messages="getEmailError"
                      label="Email"
                      data-cy="email"
                    />
                  </v-col>
                </v-row>
                <v-row class="ma-0">
                  <v-col cols="12" sm="12" md="6" class="pa-1">
                    <v-text-field
                      v-model="form.password"
                      dense
                      :error-messages="getPasswordError"
                      hint="A Senha deve conter ao menos 6 caracteres"
                      label="Senha"
                      :append-icon="togglePassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="togglePassword ? 'text' : 'password'"
                      outlined
                      data-cy="password"
                      @click:append="togglePassword = !togglePassword"
                    />
                  </v-col>
                  <v-col sm="12" md="6" class="pa-1">
                    <v-text-field
                      v-model="form.confirmationPassword"
                      dense
                      :error-messages="getConfirmationPasswordError"
                      label="Confirmação de Senha"
                      :append-icon="
                        toggleConfirmationPassword ? 'mdi-eye' : 'mdi-eye-off'
                      "
                      :type="toggleConfirmationPassword ? 'text' : 'password'"
                      outlined
                      data-cy="password"
                      @click:append="
                        toggleConfirmationPassword = !toggleConfirmationPassword
                      "
                    />
                  </v-col>
                </v-row>

                <v-row class="mt-5 mx-0" justify="center">
                  <v-col>
                    <v-btn
                      block
                      outlined
                      data-cy="btn-back"
                      @click="goTo('/login')"
                    >
                      Voltar
                    </v-btn>
                  </v-col>
                  <v-col>
                    <v-btn
                      color="primary"
                      block
                      type="submit"
                      data-cy="btn-next"
                    >
                      Proximo
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>

<script>
import { mapActions } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators'
import { routerMixin } from '~/shared/mixins'

export default {
  mixins: [validationMixin, routerMixin],
  layout: 'unlogged',
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3),
      },
      rga: {
        required,
        minLength: minLength(3),
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
      confirmationPassword: {
        required,
        sameAsPassword: sameAs('password'),
      },
    },
  },
  data: () => ({
    togglePassword: false,
    toggleConfirmationPassword: false,
    form: {
      name: '',
      rga: '',
      email: '',
      password: '',
      confirmationPassword: '',
    },
  }),
  computed: {
    getNameError() {
      return this.$v.form.name.$error && !this.$v.form.name.required
        ? 'Campo obrigatório'
        : ''
    },
    getRgaError() {
      return this.$v.form.rga.$error && !this.$v.form.rga.required
        ? 'Campo obrigatório'
        : ''
    },
    getEmailError() {
      return this.$v.form.email.$error && !this.$v.form.email.required
        ? 'Campo obrigatório'
        : this.$v.form.email.$error && !this.$v.form.email.email
        ? 'Email inválido'
        : ''
    },
    getPasswordError() {
      return this.$v.form.password.$error && !this.$v.form.password.required
        ? 'Campo obrigatório'
        : this.$v.form.password.$error &&
          !passwordValidation(this.form.password)
        ? 'Senha inválida'
        : ''
    },
    getConfirmationPasswordError() {
      return this.$v.form.confirmationPassword.$error &&
        !this.$v.form.confirmationPassword.required
        ? 'Campo obrigatório'
        : this.$v.form.confirmationPassword.$error &&
          !this.$v.form.confirmationPassword.sameAsPassword
        ? 'Senhas não conferem'
        : ''
    },
  },
  methods: {
    ...mapActions('shared', ['toggleLoadingOverlay']),
    handleFormSubmit() {
      this.$v.$touch()
      if (this.$v.$invalid) return
      this.toggleLoadingOverlay(true)

      setTimeout(() => {
        this.toggleLoadingOverlay(false)
      }, 3000)
    },
    async saveUsuarioAndNavigate() {},
    async checkIfPassportIsAlreadyUsed() {},
  },
}
</script>
