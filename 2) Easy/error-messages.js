function error(n) {
	const messages = {
		1: "Check the fan",
    2: "Emergency stop",
    3: "Pump Error",
    4: "c",
    5: "Temperature Sensor Error"
	}

	return n <= 5 && n >= 1 ? `${messages[n]}: e${n}` : 101
}
