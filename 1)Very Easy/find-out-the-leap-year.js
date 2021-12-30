function leapYear(year) {
	if (year % 4 == 0 && year % 100 !== 0){
		return true;
	} else if (year % 4 == 0 && year % 100  == 0 && year % 400 == 0) {
		return true;
	} else {
		return false;
	}
}


/*I actually completed this in pretty much the same challenge yesterday. I accidentally hit submit solution.
I really wanted to make this a little simpler. Something like this:

function leapYear(year) {
	if (year % 4 == 0 && year % 100 !== 0) || (year % 4 == 0 && year % 100  == 0 && year % 400 == 0) {
		return true;
	} else {
		return false;
	}
}/*
