function cars(wheels, bodies, figures) {
	return Math.floor(wheels / 4) < Math.floor(figures / 2) && Math.floor(wheels / 4) < bodies ? Math.floor(wheels / 4) : Math.floor(figures / 2) < Math.floor(wheels / 4) && Math.floor(figures / 2) < bodies ? Math.floor(figures / 2) : bodies
}
