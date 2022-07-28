function societyName(friends) {
 return friends.map(name => name.substring(0,1)).sort().join('')
}
