function ageDifference(ages) {
		const agesSorted = ages.sort((a, b) => a < b ? 1 : -1)
	  const answer = agesSorted[0] - agesSorted[1]
	
			return answer === 0 ? 'No age difference between spouses.' : answer === 1 ? "1 year" : answer + " years" 
}
