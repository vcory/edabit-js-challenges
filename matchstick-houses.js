function matchHouses(step) {
	if (step === 0) {
		return 0
	} else if(step === 1) {
		return 6
	} else {
		return (step * 5) + 1
	}

}