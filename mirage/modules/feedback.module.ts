// @ts-nocheck
import { Response } from 'miragejs'

export default function feedback() {
  this.post('feedback', (_schema, request) => {
    const requestBody = JSON.parse(request.requestBody)
    if (!requestBody.email)
      return new Response(400, {}, { errors: ['Usuário não existe'] })
    return new Response(200, {}, { message: 'Feedback enviado com sucesso' })
  })
}
