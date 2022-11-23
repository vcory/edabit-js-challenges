function getNumberOfApples(n, p) {

  return n === 0 || p === '100%' ? "The children didn't get any apples" : Math.floor(((100 - +p.replace('%', '')) / 100) * n)

}
