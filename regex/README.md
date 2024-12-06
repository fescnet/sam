For example:

- `\d+` matches one or more digits.
- `^[a-zA-Z]+$` matches a string with only alphabetic characters.

---

## Regex Syntax

| Pattern | Description                                     | Example Match                       |
| ------- | ----------------------------------------------- | ----------------------------------- | ----- | ------------------------ |
| `.`     | Matches any single character except newline     | `h.t` matches `hat`, `hot`          |
| `^`     | Matches the start of a string                   | `^hello` matches `hello world`      |
| `$`     | Matches the end of a string                     | `world$` matches `hello world`      |
| `\d`    | Matches any digit (0-9)                         | `\d` matches `1`, `2`               |
| `\w`    | Matches any word character (alphanumeric + `_`) | `\w` matches `a`, `1`, `_`          |
| `\s`    | Matches any whitespace character                | `\s` matches spaces, tabs           |
| `*`     | Matches 0 or more repetitions                   | `a*` matches ``, `a`, `aaa`         |
| `+`     | Matches 1 or more repetitions                   | `a+` matches `a`, `aaa`             |
| `?`     | Matches 0 or 1 occurrence                       | `colou?r` matches `color`, `colour` |
| `{n,m}` | Matches between `n` and `m` repetitions         | `a{1,3}` matches `a`, `aa`, `aaa`   |
| `[abc]` | Matches any character in the set                | `[abc]` matches `a`, `b`, `c`       |
| `(x     | y)`                                             | Matches either `x` or `y`           | `(cat | dog)`matches`cat`, `dog` |

---

## Common Regex Patterns

Here are some commonly used regex patterns:

- **Email Validation**: `/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`
- **URL Validation**: `/^(https?:\/\/)?([\w.-]+)+(:\d+)?(\/[\w.-]*)*\/?$/`
- **Phone Number Validation**: `/^\+?[1-9]\d{1,14}$/`
- **Alphanumeric String**: `/^[a-zA-Z0-9]+$/`

---

### Creating a Regex

```typescript
const regex = /^[a-zA-Z0-9]+$/; // Alphanumeric string pattern
const isValid = regex.test("Test123");
console.log(isValid); // Output: true

// Extracting Matches
const matches = "2024-12-05".match(/\d+/g);
console.log(matches); // Output: ['2024', '12', '05']

// Replacing Patterns
const result = "hello world".replace(/world/, "TypeScript");
console.log(result); // Output: "hello TypeScript"

// Sanitizing Input
const sanitized = "Hello$@World!".replace(/[^a-zA-Z0-9 ]/g, "");
console.log(sanitized); // Output: "HelloWorld"

// Extracting Data
const url = "/users/12345/orders";
const idRegex = /\/users\/(\d+)/;
const match = url.match(idRegex);
if (match) {
  console.log(match[1]); // Output: 12345
}

// Input Validation
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmail(email: string): boolean {
  return emailRegex.test(email);
}
```
