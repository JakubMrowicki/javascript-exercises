const fibonacci = function (position) {
  let location = parseInt(position)
  if (location === 0) return 0
  if (location < 0) return 'OOPS'
  let fib = []
  let i = 0
  while (fib.length < location) {
    if (fib.length < 2) fib.push(1)
    else {
      const next = fib[i - 1] + fib[i - 2]
      fib.push(next)
    }
    i++
  }
  return fib[location - 1]
}

// Do not edit below this line
module.exports = fibonacci
