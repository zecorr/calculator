// Operations
const add = (...num) => num.reduce((acc, curr) => acc + curr)
const subtract = (...num) => num.reduce((acc, curr) => acc - curr)
const multiply = (...num) => num.reduce((acc, curr) => acc * curr, 1)
const divide = (...num) => num.reduce((acc, curr) => acc / curr)

// Operators - pair the operator symbol (string key) with the
const operators = {
    '+' : add,
    '-' : subtract,
    '*' : multiply,
    '/' : divide
}

// store numbers and operators as arrays
let firstNumArr = []
let firstOperatorArr = []
let secondNumArr = []

// Values and operator stored after extracting from array
let firstValue
let operator
let secondValue
let total

// Get numbers
const getNum = function () {

    if(!operator){
        firstNumArr.push(Number(this.textContent))
        firstValue = Number(firstNumArr.join(""))
        screenLower.textContent = firstValue
    } else {
        screenUpper.textContent = `${firstValue} ${operator}`
        secondNumArr.push(Number(this.textContent))
        secondValue = Number(secondNumArr.join(''))
        screenLower.textContent = secondValue
    }
}


//
//
//

// finish 
// 
//

// Push Dot
const pushDot = function (){
    if(!firstNumArr.includes(".")){
        firstNumArr.push(".")
    } else if (!secondNumArr.includes(".")){
        secondNumArr.push(".")
    }
}

// Store operator in array
const getOperator = function (){

    if(!!firstValue && !!operator && !!secondValue){
        total = operators[operator](firstValue, secondValue)
        firstValue = total
        firstNumArr = []
        secondNumArr = []
        secondValue = 0
    } else if (!!firstValue) {
        screenUpper.textContent = `${firstValue}`
        firstOperatorArr.push(this.textContent)
        operator = firstOperatorArr[firstOperatorArr.length -1]
        screenLower.textContent = operator
        console.log(firstValue, operator)
    } else {
        firstOperatorArr.push(this.textContent)
        screenUpper.textContent = firstOperatorArr[firstOperatorArr.length -1]
    }


}

// Combine arrays and value to produce result
const equals = function (){

    if(typeof firstValue == 'number' && !!operator && typeof secondValue == 'number'){
        outcome = `${firstValue} ${operator} ${secondValue}`
        screenUpper.textContent = outcome
        console.log(`Outcome : ${outcome}`)
        total = operators[operator](firstValue, secondValue)
        console.log(`Total : ${total}`);
        screenLower.textContent = total
        console.log(total)
        firstValue = total
    }
}

// Clear screen of all data
const clearScreen = function (){
    firstNumArr = []
    firstOperatorArr = []
    secondNumArr = []
    firstValue = null
    secondValue = null
    screenLower.textContent = ''
    screenUpper.textContent = ''
    operator = ""

}


// put total in an object to 

// total now equals first value
// operator is saved after you're on the second number




// Delete / pop() last item in active array
const deleteNum = function (){
    // if(!secondValue){
    //     firstNumArr.pop()
    //     firstValue = firstNumArr.join('')
    //     screenLower.textContent = firstValue
    // } else {
    //     secondNumArr.pop()
    //     secondValue = secondNumArr.join('')
    //     screenLower.textContent = secondValue
    // }
    

}




// create array > join array > store value as first value > put in different array
// get operator > store in array next to first value
// clear first array and reuse to grab 2nd value
// clear operator > store in array next to 2nd value
// repeat indefinitely
// Equals is run as the operator is pressed
// Equals keeps total ready for additional operations
// clear resets all values
// delete pop()'s current working array 










// number input > join > store 






///////
///
//
// Calculator Body
// 7th floor
let screenUpper = document.querySelector(".screen-upper")
// screenUpper.textContent = ""

// 6th floor
let screenLower = document.querySelector(".screen-lower")
// screenLower.textContent = ""

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
btnDot.addEventListener('click', pushDot)
const btn0 = document.querySelector(".btn-0")
btn0.addEventListener('click', getNum)
const btnEquals = document.querySelector(".btn-Equals")
btnEquals.addEventListener('click', equals)
const btnPlus = document.querySelector(".btn-Plus")
btnPlus.addEventListener('click', getOperator)