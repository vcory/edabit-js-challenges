function arrayOperation(x, y, n) {
  return Array.from(new Array(y), (n, i) => i + 1).filter(num => num >= x && num % n === 0)
}
