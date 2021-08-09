export default function passwordValidation(password: string): boolean {
  // eslint-disable-next-line prefer-regex-literals
  const regex = new RegExp(
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*? ]).{8,}$/
  )
  return regex.test(password)
}
