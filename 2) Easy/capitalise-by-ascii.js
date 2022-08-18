function asciiCapitalize(str) {
return str.split('').map((char, i) => str.charCodeAt(i) % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('')
}
