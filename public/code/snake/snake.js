class Snake {
	constructor(startSpeed, startX, startY, blockDimension) {
		this.velocity = startSpeed;
		this.x = startX;
		this.y = startY;
		this.blockDimension = blockDimension;
		this.dx = 1;
		this.dy = 0;
		this.snake = [];
		this.snake.push([
			this.x,
			this.y
		]);
		this.directionChange = -1;
	}

	draw = (p) => {
		p.stroke(200);
		p.fill(255, 102, 102);
		for (let i = this.snake.length - 1; i >= 0; i--) {
			if (i === 0) p.fill(255, 0, 0);
			p.rect(
				this.snake[i][0] * this.blockDimension,
				this.snake[i][1] * this.blockDimension,
				this.blockDimension,
				this.blockDimension
			);
		}
		if (p.frameCount % this.velocity === 0) if (!this.move()) return false;
		return true;
	};

	grow = () => {
		this.snake.push([
			this.snake[this.snake.length - 1][0],
			this.snake[this.snake.length - 1][1]
		]);
	};

	move = () => {
		this.executeDirectionChange();
		this.x += this.dx;
		this.y += this.dy;
		this.snake.pop();
		if (this.hasCollided(this.x, this.y)) return false;
		this.snake.unshift([
			this.x,
			this.y
		]);
		return true;
	};

	executeDirectionChange = () => {
		if (this.directionChange === 0) {
			this.dx = -1;
			this.dy = 0;
		} else if (this.directionChange === 1) {
			this.dx = 1;
			this.dy = 0;
		} else if (this.directionChange === 2) {
			this.dx = 0;
			this.dy = -1;
		} else if (this.directionChange === 3) {
			this.dx = 0;
			this.dy = 1;
		}
	};

	changeDirection = (p) => {
		if (this.dx <= 0 && p.keyCode === p.LEFT_ARROW) this.directionChange = 0;
		else if (this.dx >= 0 && p.keyCode === p.RIGHT_ARROW) this.directionChange = 1;
		else if (this.dy <= 0 && p.keyCode === p.UP_ARROW) this.directionChange = 2;
		else if (this.dy >= 0 && p.keyCode === p.DOWN_ARROW) this.directionChange = 3;
	};

	getX = () => this.x;
	getY = () => this.y;
	hasCollided = (x, y) => {
		for (let i = 0; i < this.snake.length; i++)
			if (this.snake[i][0] === x && this.snake[i][1] === y) return true;
		return false;
	};
}
