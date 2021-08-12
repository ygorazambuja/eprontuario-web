/**
 * @author Ygor
 * @description blablabla
 * @param {string} text - The string to capitalize.
 * @returns The capitalized string.
 */
export default function capitalize(text: string): string {
  return text.toLowerCase().replace(/(?:^|\s)\S/g, (a) => a.toUpperCase())
}
