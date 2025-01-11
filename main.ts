import { handleResult, ResultType } from "./models/operation";
import { Queue } from "./models/queue";
import { Repository } from "./models/repository";
import { User } from "./models/user";

// const success: ResultType = { status: "Success", data: [1, 2, 3, 4, 5] };
// const result = handleResult(success);
// console.log(result);
// const failure: ResultType = {
//   status: "Error",
//   error: new Error("Something went wrong"),
// };
// console.log(handleResult(failure))

// const queue = new Queue<string | number >()
// const el1 = 'hello'
// const el2 = 3
// queue.enqueue(el1)
// queue.enqueue(el2)
// const removeEl: number = queue.dequeue<number>()
// console.log(removeEl)
// console.log(queue.items)
// const first: string = queue.peek<string>()
// console.log(first)
// console.log(queue.size())

// const arr = [1, 7, 13, 8, 9];
// const sortedArr = sortArray<number>(arr, (a: number, b: number) => a - b);
// console.log(sortedArr);

// const person = {name: 'Igor', age: 32}
// const prop = extractProperty(person, 'name')
// console.log(prop)

// const repo = new Repository()
// const id1 = 1
// const el1 = {name: 'Igor', age: 32, id: id1}
// const id2 = '2'
// const el2 = {name: 'John Doe', age: 42, id: id2}
// repo.add(el1)
// repo.add(el2)
// const foundEl = repo.getById(id1)
// console.log(foundEl)
// repo.removeById(id2)
// console.log(repo.getAll())

// const userRepo = new Repository<User>();
// const user1 = new User("Igor", 32);
// const user2 = new User("John", 28);
// userRepo.add(user1)
// userRepo.add(user2)
// console.log(userRepo.getAll())

function sortArray<T>(arr: T[], compareFn: (a: T, b: T) => number): T[] {
  return arr.toSorted(compareFn);
}

function extractProperty<T, K extends keyof T>(obj: T, key: K): unknown {
  return obj[key];
}
