function chineseZodiac(birthYear) {
	const signs = ['Monkey', 'Rooster', 'Dog', 'Pig','Rat','Ox',
								 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse','Sheep', ]
	return signs[birthYear % 12] }
