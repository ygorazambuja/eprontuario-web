import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Feedback } from '~/interfaces'

interface SuccesfulFeedback {
  data: {
    message: string
  }
}

export class CreateFeedbackUseCase {
  constructor(
    protected feedback: Feedback,
    protected axios: NuxtAxiosInstance
  ) {
    this.feedback = feedback
    this.axios = axios
  }

  async execute(): Promise<SuccesfulFeedback> {
    return await this.axios.post('api/feedback', this.feedback)
  }
}
