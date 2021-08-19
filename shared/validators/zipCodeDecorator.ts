/**
 * @description decorator to return blablabla
 * @param {number} length measure
 */
function hasLength(length: number) {
  return (_: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value

    descriptor.value = function (...args: any[]) {
      const value = args[0]
      if (value && value.length !== length) {
        throw new Error(`${key} must have exactly ${length} characters`)
      }
      return originalMethod.apply(this, args)
    }
  }
}

class ZipCodeValidator {
  /**
   * @description check if zip code is valid
   * @param {string} cep
   * @example isValid('79410000')
   * @return {boolean} value if zip code is valid
   */
  @hasLength(8)
  isValid(cep: string): boolean {
    const newCep = cep?.replace(/\D/g, '')
    if (newCep === '') return false
    const regexValidaCep = /^[0-9]{8}$/
    const regexIsRepeted = /^(.)\1+$/
    if (regexIsRepeted.test(newCep)) return false
    if (!regexValidaCep.test(newCep)) return false
    return true
  }

  @hasLength(2)
  randomMethod(cep: string): string {
    return cep
  }
}
export default new ZipCodeValidator()
