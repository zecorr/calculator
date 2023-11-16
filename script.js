const add = (...num) => num.reduce((acc, curr) => acc + curr, 0)

const subtract = (...num) => num.reduce((acc, curr) => acc - curr)

const multiply = (...num) => num.reduce((acc, curr) => acc * curr, 1)

const divide = (...num) => num.reduce((acc, curr) => acc / curr)

const power = (a, b) => Math.pow(a, b)