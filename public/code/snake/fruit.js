class Fruit {
	constructor(gridHeight, gridWidth, blockDimension, hasCollided) {
		this.gridHeight = gridHeight;
		this.gridWidth = gridWidth;
		this.blockDimension = blockDimension;
		this.move(hasCollided);
	}

	draw = (p) => {
		p.stroke(150);
		p.fill(255, 255, 0);
		p.rect(
			this.x * this.blockDimension,
			this.y * this.blockDimension,
			this.blockDimension,
			this.blockDimension
		);
	};

	isEaten = (x, y) => this.x === x && this.y === y;

	move = (hasCollided) => {
		do {
			this.x = Math.round(Math.random() * (this.gridWidth - 1));
			this.y = Math.round(Math.random() * (this.gridHeight - 1));
		} while (hasCollided(this.x, this.y));
	};
}
