writeyourcodehere = [1, 2, 3, 4, 5, 6, 7, 8]
var [first, second, third, other] = [1,2,3, writeyourcodehere.slice(3)]


/**
The solution was meant to be 1 line but it perhaps wasn't clear whether 1 line extra or in total.
So it should have been like this:
let [first, second, third, ...other] = [1, 2, 3, 4, 5, 6, 7, 8];
**/
