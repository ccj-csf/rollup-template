declare class Queue<T> {
  private items
  private count
  private lowestCount
  constructor()
  enqueue(element: any): void
  isEmpty(): boolean
  dequeue(): T | undefined
  peek(): T | undefined
  size(): number
  clear(): void
  toString(): string
}
export default Queue
