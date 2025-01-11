export interface Identifiable<U> {
  id: U;
}

export class Repository<T extends Identifiable<U>> {
  items: T[] = [];
  constructor() {}

  add(item: T): void {
    this.items.push(item);
  }

  getById(id: U): T {
    const item = this.items.find((a) => a.id === id);
    if (!item) {
      throw new Error("Item is not defined");
    }
    return item;
  }

  removeById(id: U): boolean {
    const index = this.items.findIndex((a) => a.id === id);
    if (index === -1) {
      return false;
    }
    this.items.splice(index, 1);
    return true;
  }

  getAll(): T[] {
    return this.items;
  }
}
