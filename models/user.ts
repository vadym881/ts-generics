import { Identifiable } from "./repository";

export class User implements Identifiable<number> {
  id: number;
  name: string;
  age: number;
  static nextId = 1
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.id=User.nextId++
  }
}
