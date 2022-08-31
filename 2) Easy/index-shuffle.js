function indexShuffle(str) {
   return [...str.split('').filter((x, ia) => ia % 2 === 0), ...str.split('').filter((y, ib) => ib % 2 !== 0)].join('')
}
