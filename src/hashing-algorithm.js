const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')

const add = (a, b) => a + b

const sumOfDigits = (digits) => {
  const sum = digits
    .toString()
    .split('')
    .map((digit) => parseInt(digit, 10) * 13)
    .reduce(add, 0)

  console.log('sum', sum)

  return sum
}

const hashString = (string) => {
  const symbols = string.split('')
  const digits = symbols
    .map((symbol) => parseInt(symbol.charCodeAt(0), 10) * 131)
    .join('')
  console.log('digits:', digits)
  const hash = sumOfDigits(digits)
  console.log(hash)
  return -1
}

module.exports = { hashString }
