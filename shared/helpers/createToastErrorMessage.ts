export function createToastErrorMessage(error: any): string[] {
  const { errors } = error?.response?.data
  return errors ?? []
}

export default createToastErrorMessage
