const currYear = new Date(Date.now()).getFullYear()

const findTheOldest = (people) =>
  people.reduce((oldest, person) => {
    const personAge = isNumber(person.yearOfDeath)
      ? person.yearOfDeath - person.yearOfBirth
      : currYear - person.yearOfBirth
    const oldestAge = isNumber(oldest.yearOfDeath)
      ? oldest.yearOfDeath - oldest.yearOfBirth
      : currYear - oldest.yearOfBirth
    return personAge > oldestAge ? person : oldest
  }, people[0])

const isNumber = (value) => (typeof value === 'number' ? true : false)
// Do not edit below this line
module.exports = findTheOldest
