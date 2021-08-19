/**
 * @description validate if password is strong enough
 * @param {string} password
 * @example "Vemqda@2020"
 * @returns true if password is strong enough
 * */
export default function passwordValidation(password: string): boolean {
  // eslint-disable-next-line prefer-regex-literals
  return new RegExp(
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*? ]).{8,}$/
  ).test(password)
}
