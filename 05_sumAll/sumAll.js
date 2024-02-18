const sumAll = function (start, end) {
  if (
    start < 0 ||
    end < 0 ||
    typeof start !== 'number' ||
    typeof end !== 'number'
  ) {
    return 'ERROR'
  }
  let result = 0
  let a = start < end ? start : end
  const b = end > start ? end : start
  while (a <= b) {
    result += a
    a++
  }
  return result
}

// Do not edit below this line
module.exports = sumAll
