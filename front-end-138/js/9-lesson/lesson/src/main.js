const btnMin = document.querySelector(".minus")
const btnPlus = document.querySelector(".plus")
const output = document.querySelector(".out")

let count = 0

btnMin.addEventListener("click", () => {
  if (count >= 1) {
    count--
    output.textContent = count
  } else {
    console.log("stop")
  }
})

btnPlus.addEventListener("click", () => {
  count++
  output.textContent = count
})

////////////////////
let inpText = document.querySelector(".text")
let btnAdd = document.querySelector(".add")
let counter = document.querySelector(".count")
let list = document.querySelector("ol")

let total = 0

btnAdd.addEventListener("click", function () {
  if (inpText.value.trim() !== "") {
    const li = document.createElement("li")
    li.textContent = inpText.value
    list.appendChild(li)
    inpText.value = ""
    total = total + 1
    counter.textContent = total
  }
})

inpText.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    btnAdd.click()
  }
})
