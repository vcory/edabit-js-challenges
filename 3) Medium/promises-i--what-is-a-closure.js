function greetingMaker(greeting) {
	return function closure(name) {
	  return greeting + ", " + name 	
	}
}
