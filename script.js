// Operations
const add = (...num) => num.reduce((acc, curr) => acc + curr, 0)
const subtract = (...num) => num.reduce((acc, curr) => acc - curr)
const multiply = (...num) => num.reduce((acc, curr) => acc * curr, 1)
const divide = (...num) => num.reduce((acc, curr) => acc / curr)
// const power = (a, b) => Math.pow(a, b)  // future development


// store numbers and operators as arrays
let arr1 = []
let arr2 = []
let arr3 = []
let arr4 = []
let arr5 = []

// Initial number and operator gathering
let firstValue
let operator
let firstNumber = true
let secondValue
let thirdValue
let fourthValue

const emptyFirstNumber = function (){
    arr1 = []
    firstValue = 0
    firstNumber = true
}

const getNum = function(){
    if (!firstNumber){
        arr3.push(Number(this.textContent))
        screenLower.textContent = Number(arr3.join(""))
        secondValue = Number(arr3.join(''))
    }
    else {
    arr1.push(Number(this.textContent))
    screenLower.textContent = Number(arr1.join(''))}
    firstValue = Number(arr1.join(""))
}

// create object assigning name of operator with symbol
// can then return existing name function to run

const getOperator = function (){

    if (!firstNumber){
        arr4.push(this.textContent)
        screenLower.textContent = arr4[arr4.length -1]
        operator = arr4[arr4.length - 1]
        console.log(operator)
        firstNumber = false
    }
    arr2.push(this.textContent)
    screenLower.textContent = arr2[arr2.length -1]
    operator = arr2[arr2.length - 1]
    console.log(operator)
    firstNumber = false
}

// Number Operation Processing

const operators = {
    '+' : add,
    '-' : subtract,
    '*' : multiply,
    '/' : divide
}


const equals = function (){
    outcome = `${arr1.join('')} ${arr2[arr2.length - 1]} ${arr3.join('')}`
    screenUpper.textContent = outcome
    console.log(outcome)
    screenLower.textContent = operators[operator](firstValue, secondValue)
    
}

const clearScreen = function (){
    arr1 = []
    arr2 = []
    arr3 = []
    firstValue = 0
    secondValue = 0
    screenLower.textContent = ''
    screenUpper.textContent = ''

}

const deleteNum = function (){

}



// Calculator Body
// 7th floor
let screenUpper = document.querySelector(".screen-upper")
screenUpper.textContent = ""

// 6th floor
let screenLower = document.querySelector(".screen-lower")
screenLower.textContent = ""

// 5th floor
const clearBtn = document.querySelector(".btn-Clear")
clearBtn.addEventListener('click', clearScreen)
const deleteBtn = document.querySelector(".btn-Delete")
deleteBtn.addEventListener('click', deleteNum)

// 4th floor
const btn7 = document.querySelector(".btn-7")
btn7.addEventListener('click', getNum)
const btn8 = document.querySelector(".btn-8")
btn8.addEventListener('click', getNum)
const btn9 = document.querySelector(".btn-9")
btn9.addEventListener('click', getNum)
const btnDivide = document.querySelector(".btn-Divide")
btnDivide.addEventListener('click', getOperator)

// 3rd floor
const btn4 = document.querySelector(".btn-4")
btn4.addEventListener('click', getNum)
const btn5 = document.querySelector(".btn-5")
btn5.addEventListener('click', getNum)
const btn6 = document.querySelector(".btn-6")
btn6.addEventListener('click', getNum)
const btnTimes = document.querySelector(".btn-Times")
btnTimes.addEventListener('click', getOperator)

// 2nd floor
const btn1 = document.querySelector(".btn-1")
btn1.addEventListener('click', getNum)
const btn2 = document.querySelector(".btn-2")
btn2.addEventListener('click', getNum)
const btn3 = document.querySelector(".btn-3")
btn3.addEventListener('click', getNum)
const btnMinus = document.querySelector(".btn-Minus")
btnMinus.addEventListener('click', getOperator)

// 1st floor
const btnDot = document.querySelector(".btn-Dot")
btnDot.addEventListener('click', getNum)
const btn0 = document.querySelector(".btn-0")
btn0.addEventListener('click', getNum)
const btnEquals = document.querySelector(".btn-Equals")
btnEquals.addEventListener('click', equals)
const btnPlus = document.querySelector(".btn-Plus")
btnPlus.addEventListener('click', getOperator)



