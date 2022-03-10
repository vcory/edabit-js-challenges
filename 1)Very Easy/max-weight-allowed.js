function weightAllowed(car, p, maxWeight) {
	const weightCar = car * 0.453592
	const weightPassengers = p.reduce((a,b) => a + b * 0.453592,0)
	return weightPassengers + weightCar < maxWeight ? true : false;
}
