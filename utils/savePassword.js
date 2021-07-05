const fs = require("fs")
const path = require("path")
const os = require("os")
const chalk = require("chalk")

const savePassword = (password) => {
  // save the password to a file passwords.txt
  fs.open(path.join(__dirname, "../", "passwords.txt"), "a", 666, (e, id) => {
    // EOL end of line
    fs.write(id, password + os.EOL, null, "utf-8", () => {
      fs.close(id, () => {
        console.log(chalk.green("Password saved to passwords.txt"))
      })
    })
  })
}

module.exports = savePassword
