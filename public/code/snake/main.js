const setUpSnake = (location) => {
	new p5((p) => {
		const height = 10;
		const width = 15;
		const blockDimension = 40;
		const game = new Game(p, height, width, blockDimension);
		p.setup = () => {
			game.setup();
		};
		p.draw = () => {
			game.draw();
		};
		p.keyPressed = () => {
			game.keyPressed();
		};
	}, location);
};
