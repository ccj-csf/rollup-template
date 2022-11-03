declare class Stack<T> {
  private count
  private items
  constructor()
  push(element: any): void
  size(): number
  isEmpty(): boolean
  pop(): T | undefined
  peek(): T | undefined
  clear(): void
  toString(): string
}
export default Stack
