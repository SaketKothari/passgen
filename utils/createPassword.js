const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"
const symbols = "!@#$%^&*_-+="

const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
  // initially it has all letters
  let chars = alpha
  // if hasNumbers is true use append and add all the numbers else ""
  hasNumbers ? (chars += numbers) : ""
  hasSymbols ? (chars += symbols) : ""
  // passing chars to another function generatePassword
  return generatePassword(length, chars)
}

const generatePassword = (length, chars) => {
  let password = ""
  for (let i = 0; i < length; i++) {
    // charAt gives certain char at certain position and that position is random
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return password
}

module.exports = createPassword
