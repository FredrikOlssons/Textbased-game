import './style.css'

let myString: string = "Hello";
let myBoolean: boolean | string | undefined = true;

interface User {
  name: string, 
  age: number
}

interface Fordon {
brand: string
}

interface Bil extends Fordon {
doors: string[]
}

interface Motorcykel {
footpegs: string[]
}

let car : Bil

let myObject: { name: string, age: number } = {
  name: "Fredrik",
  age: 35
}

//myObject.name = 54;
myObject.age = 54;

let users: {name: string, age: number }[] = [{
    name: "Fredrik",
  age: 35
  }]

  users.forEach((user) =>{

  }) 

const addUser: (name: string, age: number) => void = (name, age) => {
  //users.push({name: name, age})
  const newUsersList = [...users, {name, age}]
  users = newUsersList
}

console.log(users)
addUser("Kalle", 18)
console.log(users)

const calculateNumbers: (numOne: number, numTwo: number) => boolean = (x, y) => {
  return (x + y as unknown as boolean)
}

console.log (calculateNumbers(10, 20))

const logUsers: (users: {name: string, age: number}) => void = (users) => {
  users.forEach((user) => {
    let {name, age} = users
    console.log(name, age)
  });
}

