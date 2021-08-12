export type Gender = 'F' | 'M' | 'O'

export const gender = (gender: Gender) => {
  return gender ? ['F', 'M', 'O'].includes(gender) : true
}

export default gender
