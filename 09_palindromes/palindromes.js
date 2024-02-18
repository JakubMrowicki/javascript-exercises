const palindromes = function (string) {
  return cleanString(string) === reverseString(cleanString(string))
}

const cleanString = (string) => {
  let lower = string.toLowerCase()
  let clean = lower.replace(/[^A-Z0-9]/gi, '')
  return clean
}

const reverseString = (string) => {
  result = ''
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i]
  }
  return result
}

// Do not edit below this line
module.exports = palindromes
