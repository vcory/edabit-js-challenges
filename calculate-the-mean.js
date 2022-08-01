function mean(arr) {
 return parseFloat((arr.reduce((acc, curVal) => acc + curVal) / arr.length).toFixed(2))
}
