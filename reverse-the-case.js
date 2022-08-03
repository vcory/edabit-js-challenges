function reverseCase(str) {
  return str.split('').map(char => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()).join('')
}
