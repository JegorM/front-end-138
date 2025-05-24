////////////
//функціональний компонент
// let out = document.querySelector(".out")

// function Buttons(n, type) {
//   return `<button class="button button--${type}">${n}</button>`
// }

// out.innerHTML += Buttons("зкшмуе", "s")
// out.innerHTML += Buttons()

//////////////////
// класовые компоненты
// let obj = [
//   {
//     name: "Sasha",
//     age: 22,
//   },
//   {
//     name: "Sasha 2",
//     age: 21,
//     color: "red",
//   },
// ]

// function div(item) {
//   let div = document.createElement("div")
//   div.innerHTML = `hello ${item.name} age: ${item.age}`

//   return div
// }
// out.append(div(obj[0]))

// function test(data) {
//   console.log(data[0].name)
// }
// test(obj)
/////////////////
// class createUser {
//   constructor(item) {
//     ;(this.name = item.name), (this.age = item.age)
//   }

//   createElement() {
//     let div = document.createElement("div")
//     div.innerHTML = `hello ${this.name} age: ${this.age}`

//     return div
//   }
// }
// let user2 = new createUser(obj[1])

// out.append(user2.createElement())

// class NewCreate extends createUser {
//   constructor(item) {
//     super(item), (this.color = item.color)
//   }
// }
// let user3 = new NewCreate(obj[1])
// out.append(user3.NewCreate(obj[1]))

// console.log(new NewCreate(obj[1]))
////////////////////

let users = [
  {
    name: "Yehor",
    age: "20",
    price: 1200,
  },
  {
    name: "Vlad",
    age: "25",
    price: 200,
  },
  {
    name: "Oleg",
    age: "55",
    price: 2200,
  },
]

let outs = document.querySelector(".out")
//карточка узера
function createUser(user) {
  let wrapper = document.createElement("div")
  wrapper.classList.add("item")
  let name = document.createElement("h5")
  name.innerHTML = `hello ${user.name}`
  let age = document.createElement("h6")
  age.innerHTML = user.age
  // age.classList.add("age")
  let price = document.createElement("div")
  price.innerHTML = calc(user.price)
  wrapper.append(name, age, price)
  return wrapper
}

//вывод в out
function list(userAge) {
  let div = document.createElement("div")
  div.innerHTML = `Old ${userAge.age}`
  return div
}
// доар в грн = 41грн
function calc(walet) {
  return Math.floor(parseInt(walet) / 41)
}

outs.append(createUser(users[0]))
// outs.append(list(users[0]))
// outs.append(calc(users[0]))

// outs.append(createUser(users[1]))
// outs.append(list(users[1]))
// outs.append(calc(users[1]))

// outs.append(createUser(users[2]))
// outs.append(list(users[2]))
// outs.append(calc(users[2]))
