const add = function (a, b) {
  return a + b
}

const subtract = function (a, b) {
  return a - b
}

const sum = function (numbers) {
  let sum = 0
  numbers.forEach((num) => (sum += num))
  return sum
}

const multiply = function (numbers) {
  if (numbers.length === 0) return 0
  let result = 1
  numbers.forEach((num) => (result *= num))
  return result
}

const power = function (a, b) {
  return Math.pow(a, b)
}

const factorial = function (num) {
  if (num < 0) return -1
  else if (num === 0) return 1
  else {
    return num * factorial(num - 1)
  }
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
}
