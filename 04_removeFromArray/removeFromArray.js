const removeFromArray = function (array, ...elements) {
  let elementsArray = [...elements]
  elementsArray.forEach((element) => {
    array = array.filter((item) => item !== element)
  })
  return array
}

// Do not edit below this line
module.exports = removeFromArray
