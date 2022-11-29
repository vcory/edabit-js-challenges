function transformUpvotes(str) {
  return str.split(' ').map(num => num.indexOf('.') > -1 ? parseInt(num.replace('.', '').replace('k', '') + '00') : parseInt(num))
}
