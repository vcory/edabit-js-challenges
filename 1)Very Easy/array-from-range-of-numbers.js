function rangeOfNum(start, end) {
return Array.from({ length: end - start - 1}, (el, i) => i + start + 1)
}
