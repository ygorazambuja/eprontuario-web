// Primitive
let text: string = 'Hello'
const number: number = 10
const bool: boolean = true

// Arrays
const numberArray: number[] = [1, 2, 3, 4, 5]
const stringArray: string[] = ['a', 'b', 'c', 'd', 'e']
const dateArray: Date[] = [new Date(), new Date()]

// functions
function sum(a: number, b: number): number {
  // text = 2;
  return a + b
}
// console.log(sum(1,2))

function infiniteSum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0)
}
// console.log(infiniteSum(1,2,3,4,5,6,7,8,9,10,10))

// Enum

enum Color {
  Red,
  Green,
  Blue,
}
// console.log(Color);
