export const zipCode = (cep: string): boolean => {
  const newCep = cep?.replace(/\D/g, '')
  if (newCep === '') return false
  const regexValidaCep = /^[0-9]{8}$/
  const regexIsRepeted = /^(.)\1+$/
  if (regexIsRepeted.test(newCep)) return false
  if (!regexValidaCep.test(newCep)) return false
  return true
}
