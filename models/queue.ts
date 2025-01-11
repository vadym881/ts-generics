export class Queue<T> {
  items: T[] = [];
  constructor() {}

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue<U extends T>(): U {
    const item = this.items.shift();

    if (!item) {
      throw new Error("Item is not defined");
    }

    return item as U;
  }

  peek<U extends T>(): U {
    return this.items[0] as U;
  }

  size(): number {
    return this.items.length
  }
}
