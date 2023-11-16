const add = (...num) => num.reduce((acc, curr) => acc + curr, 0)

const subtract = (...num) => num.reduce((acc, curr) => acc - curr)

const multiply = (...num) => num.reduce((acc, curr) => acc * curr, 1)

const divide = (...num) => num.reduce((acc, curr) => acc / curr)

const power = (a, b) => Math.pow(a, b)

let firstNum // = user input
let operator // = user input
let secondNum // = user input

// buttons with numbers
// buttons with operators 
// display
// clear / reset display

const header = document.querySelector(".header")
header.textContent = "1 + 3 + 3 + 7"
