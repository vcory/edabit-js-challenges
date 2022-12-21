function filterStateNames(arr, type) {

  return (type === 'abb') ? arr.filter(item => item.length <= 2 ? 1 : 0) : arr.filter(item => item.length >= 3 ? 1 : 0)

}
