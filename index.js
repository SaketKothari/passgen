#!/usr/bin/env node
const program = require("commander")

const chalk = require("chalk")

// for copy to keyboard
const clipboardy = require("clipboardy")
const log = console.log
const createPassword = require("./utils/createPassword")
const savePassword = require("./utils/savePassword")

// version number for our application
program.version("1.0.0").description("Simple Password Generator")

// commands
program
  // 8 is the default length
  .option("-l, --length <number>", "length of password", "8")
  .option("-s, --save", "save password to passwords.txt")
  // numbers & symbols are bydefault true
  .option("-nn, --no-numbers", "remove numbers")
  .option("-ns, --no-symbols", "remove symbols")
  .parse()

const { length, save, numbers, symbols } = program.opts()

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols)

// Save to file
if (save) {
  savePassword(generatedPassword)
}

// Copy to clipboard
clipboardy.writeSync(generatedPassword)

// Output generated password
log(chalk.blue("Generated Password: ") + chalk.bold(generatedPassword))
log(chalk.yellow("Password copied to clipboard"))
