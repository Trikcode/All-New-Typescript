interface User {
  name: string
  age?: number
}
// const user: User = {
//   name: 'Moster',
//   age: 40,
// }

const usr2: { name: string; age?: number } = {
  name: 'Jack',
}
// console.log(usr2.name)
const addId = <T>(obj: T) => {
  const id = Math.random().toString(16)

  return {
    ...obj,
    id,
  }
}
interface UserInterface {
  name: string
}
const user: UserInterface = {
  name: 'Nobert',
}
const result = addId<UserInterface>(user)
console.log('res', result)
