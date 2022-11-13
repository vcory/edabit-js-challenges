function progressDays(runs) {
	return runs.reduce((acc, cur, i, arr) => acc + (i === 0 ? 0 : cur > arr[i -1] ? 1 : 0), 0)
}
