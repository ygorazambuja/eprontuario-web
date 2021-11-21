<template>
  <v-page-template title="Sugestões">
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
            :value="user.email"
            label="Digite seu email"
            outlined
            type="email"
            readonly
            disabled
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
  </v-page-template>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations, mapState } from 'vuex'
import VPageTemplate from '~/shared/components/VPageTemplate.vue'
import { toastMixin } from '~/shared/mixins'

import { CreateFeedbackUseCase } from '~/usecases/feedback/CreateFeedbackUseCase'

export default Vue.extend({
  components: { VPageTemplate },
  mixins: [toastMixin],
  data: () => ({
    feedback: '',
    isFormValid: false,
    feedbackRules: {
      required: (value: string) => !!value || 'Este campo é obrigatório',
    },
  }),
  computed: {
    ...mapState('User', ['user']),
  },
  methods: {
    ...mapMutations('shared', ['toggleLoadingOverlay']),
    async handleFormSubmit() {
      const { feedback } = this
      const { email } = this.user
      this.toggleLoadingOverlay()
      try {
        const { data } = await new CreateFeedbackUseCase(
          {
            email,
            content: feedback,
          },
          this.$axios
        ).execute()
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
