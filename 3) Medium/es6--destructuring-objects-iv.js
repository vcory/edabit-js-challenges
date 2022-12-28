const str = `({ first = "John", last = "Doe", alias: nickname = "JD" } = { first: "James", last: "Baker" }).toString()`

const validString = (str) => {
   return /\{.*alias.*\:.*nickname.*\=.*\"JD\".*\}/.test(str) ? "valid" : "not valid"
}
