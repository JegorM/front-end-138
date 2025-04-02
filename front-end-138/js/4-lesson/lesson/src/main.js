// глобальное приминение
test()

function test() {
  console.log("test")
}

// можно вызывать только ниже
let const2 = function () {
  console.log("test 2")
}
const2()
// Arrow, нужно для быстрого вызова функции
const testArrow = () => {
  console.log("test Arrow")
}
testArrow()
/////////////
let arr = [1, 2, 3, 4, 5]

// arr.map()
///////////
function calcPlus(num1, num2) {
  console.log(num1 + num2)
}

// calcPlus(1, 3)
//////////
let num = 2
function exempleReturn(num1, num2) {
  return num1 + num2
}

console.log(exempleReturn(1, 3))
////////
let out = document.querySelector("section")
function createTest() {
  return "test"
}
// out.innerHTML = createTest()
////////
function createTest2() {
  let age = 15
  if (age > 18) {
    console.log("Вам э 18")
    return
  } else {
    console.log("Вам немаэ 18")
    return
  }
}

// createTest2()
////////////

function numberMnosh(num5) {
  let fullAge = 2025
  let trow = fullAge - num5
  if (trow >= 18) {
    console.log("Вам э 18")
  } else {
    console.log("Вам немаэ 18")
  }
  return
}
// numberMnosh(2006)
///////
function userInfo(name, age) {
  let ageFull = 2025
  let testik = ageFull - age
  if (testik >= 18) {
    console.log(`привіт ${name}, тобі є 18 ми тебе вітаемо`)
  } else {
    console.log(`${name}, тобі поьтрібно вирости`)
  }
  return
}
// userInfo("Yehor", 2004)
/////////////////

///////////////
let inp1 = document.querySelector(".inp1")
let inp2 = document.querySelector(".inp2")
let select = document.querySelector(".select")
let btn = document.querySelector(".btn")
let outse = document.querySelector(".outs")

btn.onclick = () => {
  let num1 = +inp1.value
  let num2 = +inp2.value
  let operation = select.value

  switch (operation) {
    case "+":
      plus(num1, num2)
      break
    case "-":
      minus(num1, num2)
      break
    case "*":
      multi(num1, num2)
      break
    default:
      outse.innerHTML = "Выберите операцию!"
  }
}

function plus(num, num2) {
  outse.innerHTML = +num + +num2
}

function minus(num, num2) {
  outse.innerHTML = +num - +num2
}

function multi(num, num2) {
  outse.innerHTML = +num * +num2
}
///////////////

function nameUser(name) {
  for (let i = 0; i < 5; i++) {
    console.log(name)
  }
}

// nameUser("Yehor")
///////////////
let sel = document.querySelector(".sel")
let butt = document.querySelector(".btn")
let outo = document.querySelector(".out")

btn.onclick = () => {
  let operation = sel.value
  let name = "Sasha"
  outo.innerHTML = ""

  switch (operation) {
    case "5":
      funf(name)
      break
    case "10":
      zehn(name)
      break
    case "15":
      funfzehn(name)
      break
    default:
      outse.innerHTML = "Выберите операцию!"
  }
}

function funf(name) {
  for (let i = 0; i < 5; i++) {
    let li = document.createElement("li")
    li.textContent = name
    outo.appendChild(li)
  }
}

function zehn(name) {
  for (let i = 0; i < 10; i++) {
    let li = document.createElement("li")
    li.textContent = name
    outo.appendChild(li)
  }
}

function funfzehn(name) {
  for (let i = 0; i < 15; i++) {
    let li = document.createElement("li")
    li.textContent = name
    outo.appendChild(li)
  }
}
