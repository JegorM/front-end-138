let a = [1, 2, 3, "Sasha", true, { name: "Yegor" }]

// a.map((item) => {
//   console.log(item)
// })

let b = {
  name: "Sasha",
  old: 20,
}

// console.log(b)

const test = {
  firstLevel: {
    secondLevel: {
      thirdLevel: {
        name: "Sasha",
        age: 325,
        isMarried: true,
      },
    },
  },
}
// console.log(JSON.stringify(test, null, 2))
////////////

let arr = ["User1", "User2", "User3", "User4", "User5", "User6", "User7"]
let btn = document.querySelector("#btn")
let sel = document.querySelector("#sel")
console.log(btn)

arr.map((item) => {
  sel.innerHTML += `<option value="${item}">${item}</option>`
})

btn.onclick = () => {
  arr.map((item) => {
    // console.log(item)
    if (item === sel.value) {
      console.log(item)
    }
  })
}
// прибирає дублікати з масиву(DS)
let testSet = new Set(arr)
/////////////////////////////////////////////////////
let sasha = {
  name: "Sahsa",
  age: 2000,
  photo: ["img1", "img2", "img3"],
  patents: [
    {
      name: "Kolya",
      age: 50,
    },
    {
      name: "Sveta",
      age: 45,
    },
  ],
  isMaried: true,
  actualAge: function () {
    const d = new Date()
    let year = d.getFullYear()
    return year - this.age
    // console.log(year)
  },
}

// sasha.age = 1990
//додавання  або перезаприс в об'єкт
sasha.password = "sdfuweu8rwh8ufeh"
// видалення: delete sasha.password
//
// console.log(sasha)
// console.log(sasha.age, sasha.actualAge())
////////// актуальна дата

///////

let olha = {}
olha.name = "Olha"
// console.log(olha)

/////////////

let inp1 = document.querySelector(".inp1")
let inp2 = document.querySelector(".inp2")
let btnn = document.querySelector(".btnn")
let error = document.querySelector(".error")
let userOut = document.querySelector(".users")
// let lang = document.querySelector(".language")
let users = []

let masseg = {
  en: {
    errorEn: "fill in all fields",
    accsesEn: "all fields are filled in correctly",
  },
  ua: {
    errorUa: "заповніть всі поля",
    accsesUa: "всі поля заповнені вірно",
  },
}

btnn.onclick = () => {
  if (inp1.value && inp2.value) {
    error.innerHTML = `<span class="green"> ${masseg.en.accsesEn}</span>`
    users.push({
      name: "sasha",
      password: "admin",
    })

    userOut.innerHTML = users.length

    console.log(users)
  } else {
    // console.log("")
    error.innerHTML = `<span class="red"> ${masseg.en.errorEn}</span>`
  }
}
//////////////
