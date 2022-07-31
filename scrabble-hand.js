function maximumScore(tileHand) {
 return tileHand.map(hand => hand.score).reduce((acc, currVal) => acc + currVal)
}
