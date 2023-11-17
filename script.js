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

const dude = function(){
    screen.textContent = this.textContent
}


let screen = document.querySelector(".screen-display")
screen.textContent = "1 + 3 + 3 + 7"

const clearBtn = document.querySelector(".btn-Clear")
clearBtn.addEventListener('click', dude)
const deleteBtn = document.querySelector(".btn-Delete")
deleteBtn.addEventListener('click', dude)

const btn7 = document.querySelector(".btn-7")
btn7.addEventListener('click', dude)
const btn8 = document.querySelector(".btn-8")
btn8.addEventListener('click', dude)
const btn9 = document.querySelector(".btn-9")
btn9.addEventListener('click', dude)
const btnDivide = document.querySelector(".btn-Divide")
btnDivide.addEventListener('click', dude)

const btn4 = document.querySelector(".btn-4")
btn4.addEventListener('click', dude)
const btn5 = document.querySelector(".btn-5")
btn5.addEventListener('click', dude)
const btn6 = document.querySelector(".btn-6")
btn6.addEventListener('click', dude)
const btnTimes = document.querySelector(".btn-Times")
btnTimes.addEventListener('click', dude)

const btn1 = document.querySelector(".btn-1")
btn1.addEventListener('click', dude)
const btn2 = document.querySelector(".btn-2")
btn2.addEventListener('click', dude)
const btn3 = document.querySelector(".btn-3")
btn3.addEventListener('click', dude)
const btnMinus = document.querySelector(".btn-Minus")
btnMinus.addEventListener('click', dude)

const btnDot = document.querySelector(".btn-Dot")
btnDot.addEventListener('click', dude)
const btn0 = document.querySelector(".btn-0")
btn0.addEventListener('click', dude)
const btnEquals = document.querySelector(".btn-Equals")
btnEquals.addEventListener('click', dude)
const btnPlus = document.querySelector(".btn-Plus")
btnPlus.addEventListener('click', dude)



