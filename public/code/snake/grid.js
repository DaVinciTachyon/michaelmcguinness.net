class Grid {
	constructor(height, width, blockDimension) {
		this.height = height;
		this.width = width;
		this.blockDimension = blockDimension;
	}

	getPixelHeight = () => this.height * this.blockDimension;
	getPixelWidth = () => this.width * this.blockDimension;

	draw = (p) => {
		p.noStroke();
		p.fill(200, 230, 200);
		for (let y = 0; y < this.height; y++)
			for (let x = y % 2; x < this.width; x += 2)
				p.rect(
					this.blockDimension * x,
					y * this.blockDimension,
					this.blockDimension,
					this.blockDimension
				);
		p.fill(100, 190, 200);
		for (let y = 0; y < this.height; y++)
			for (let x = (y + 1) % 2; x < this.width; x += 2)
				p.rect(
					this.blockDimension * x,
					y * this.blockDimension,
					this.blockDimension,
					this.blockDimension
				);
	};

	isHit = (x, y) => x > this.width - 1 || x < 0 || y > this.height - 1 || y < 0;
}
