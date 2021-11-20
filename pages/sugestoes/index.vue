<template>
  <v-container fluid>
    <h1>Sugestões</h1>

    <v-card class="my-5 pa-5">
      <v-card-title> Feedback </v-card-title>
      <v-card-subtitle>
        Nos envie sua sugestão de como podemos melhorar esse sistema !
      </v-card-subtitle>

      <v-form
        ref="formRef"
        v-model="isFormValid"
        @submit.prevent="handleFormSubmit"
      >
        <v-row class="pa-5">
          <v-text-field
            v-model="email"
            label="Digite seu email"
            outlined
            type="email"
            hint="Ex: joaopiolho@gmail.com"
            readonly
          >
          </v-text-field>
        </v-row>
        <v-row class="px-5">
          <v-textarea
            v-model="feedback"
            auto-grow
            outlined
            label="Em que podemos melhorar ?"
            :rules="[feedbackRules.required]"
          />
        </v-row>
        <v-row class="px-5 py-2" justify="end">
          <v-btn type="submit" color="success" :disabled="!isFormValid">
            Enviar
          </v-btn>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
import { toastMixin } from '~/shared/mixins'

export default Vue.extend({
  mixins: [toastMixin],
  data: () => ({
    email: 'joaopiolho@gmail.com',
    feedback: '',
    isFormValid: false,
    feedbackRules: {
      required: (value: string) => !!value || 'Este campo é obrigatório',
    },
  }),

  methods: {
    ...mapMutations('shared', ['toggleLoadingOverlay']),
    async handleFormSubmit() {
      const { email, feedback } = this
      this.toggleLoadingOverlay()
      try {
        const { data } = await this.$axios.post('api/feedback', {
          email,
          feedback,
        })
        this.createSuccessToast(data.message)
      } catch (error) {
        this.createErrorToast('Não foi possivel mandar o feedback')
      } finally {
        this.toggleLoadingOverlay()
      }
    },
  },
})
</script>
