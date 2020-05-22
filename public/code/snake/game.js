class Game {
	constructor(p, height, width, blockDimension) {
		this.highscore = 0;
		this.p = p;
		this.height = height;
		this.width = width;
		this.blockDimension = blockDimension;
		this.grid = new Grid(this.height, this.width, this.blockDimension);
		this.inGame = false;
	}

	setup = () => {
		this.p.createCanvas(this.grid.getPixelWidth(), this.grid.getPixelHeight());
		this.grid.draw(this.p);
	};

	draw = () => {
		if (!this.inGame) return;
		this.grid.draw(this.p);
		if (this.fruit.isEaten(this.snake.getX(), this.snake.getY())) {
			this.snake.grow();
			this.fruit.move(this.snake.hasCollided);
			this.updateScore();
		}
		this.fruit.draw(this.p);
		if (this.grid.isHit(this.snake.getX(), this.snake.getY())) this.gameOver();
		if (!this.snake.draw(this.p)) this.gameOver();
	};

	keyPressed = () => {
		if (!this.inGame && this.p.keyCode === 32) this.startGame();
		this.snake.changeDirection(this.p);
	};

	startGame = () => {
		this.inGame = true;
		const startX = 2;
		const startY = 2;
		const startSpeed = 20;
		this.snake = new Snake(startSpeed, startX, startY, this.blockDimension);
		this.fruit = new Fruit(
			this.height,
			this.width,
			this.blockDimension,
			this.snake.hasCollided
		);
		this.updateScore();
	};

	updateScore = () => {
		const score = this.snake.snake.length;
		document.getElementById('score').innerText = score;
		if (score > this.highscore) {
			this.highscore = score;
			document.getElementById('highscore').innerText = this.highscore;
		}
	};

	gameOver = () => {
		this.inGame = false;
	};
}
