function equation(s) {
	var func = new Function("return " + s);
	return func();
}
