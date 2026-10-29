// greet: the throwaway's one module (build/requirements/greet.md).
export function greet(name) {
  if (typeof name !== 'string' || !name) throw new TypeError('greet takes a non-empty string');   // R2
  return `Hello, ${name}!`;   // R1
}
