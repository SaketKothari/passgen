# Command Line Password Generator

A Node.js command-line tool that generates secure random passwords and automatically copies them to your clipboard.

## How It Works

This application generates random passwords by:

1. **Creating Character Sets**: Builds a pool of characters including:

  - Uppercase and lowercase letters (A-Z, a-z) - always included
  - Numbers (0-9) - optional, included by default
  - Symbols (!@#$%^&\*\_-+=) - optional, included by default

2. **Random Generation**: Randomly selects characters from the pool to create a password of your specified length

3. **Clipboard Integration**: Automatically copies the generated password to your system clipboard for easy pasting

4. **Optional Persistence**: Can save generated passwords to a local `passwords.txt` file with the `-s` flag

## Technical Stack

- **[commander.js](https://github.com/tj/commander.js)** - Handles command-line interface and options parsing
- **[chalk](https://github.com/chalk/chalk)** - Provides colored terminal output for better readability
- **[clipboardy](https://github.com/sindresorhus/clipboardy)** - Enables cross-platform clipboard access

## Installation

Install dependencies:

```bash
npm install
```

### Local Usage

Run directly with Node.js:

```bash
node index.js [options]
```

### Global Installation

Create a global symlink to run `passgen` from anywhere:

```bash
npm link

# Now you can run from any directory
passgen [options]

# To remove the global command
npm unlink
```

## Usage Examples

```bash
# Generate an 8-character password (default)
passgen

# Generate a 16-character password
passgen -l 16

# Generate a password without numbers
passgen --no-numbers

# Generate a password without symbols
passgen --no-symbols

# Generate a 12-character password with only letters and numbers
passgen -l 12 --no-symbols

# Generate a password and save it to passwords.txt
passgen -s

# Combine multiple options
passgen -l 20 -s --no-symbols
```

## Options

| Short | Long              | Description                                      | Default |
| ----- | ----------------- | ------------------------------------------------ | ------- |
| -l    | --length <number> | Length of the generated password                 | 8       |
| -s    | --save            | Save password to `passwords.txt` in project root | false   |
| -nn   | --no-numbers      | Exclude numbers from the password                | false   |
| -ns   | --no-symbols      | Exclude symbols from the password                | false   |
| -h    | --help            | Display help information                         | -       |
| -V    | --version         | Display version number                           | -       |

## Output

When you run the command, you'll see:

- The generated password displayed in blue
- A confirmation message that the password was copied to clipboard
- If `-s` flag is used, a confirmation that the password was saved

## Project Structure

```
passgen/
├── index.js                 # Main entry point and CLI logic
├── package.json             # Project configuration and dependencies
├── readme.md                # This file
├── passwords.txt            # Created when using -s flag (git-ignored)
├── public/                  # Public assets
└── utils/
   ├── createPassword.js    # Password generation logic
   └── savePassword.js      # File saving functionality
```

## License

MIT

