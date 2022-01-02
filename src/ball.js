export default class Ball {
	constructor(game) {
		this.image = document.getElementById('gameBall');

		this.game = game;

		this.position = {x: 10, y: 50};
		this.speed = {x: 2, y: 2};
		this.size = 16;

		this.gameWidth = game.gameWidth;
		this.gameHeight = game.gameHeight;
	}

	draw(ctx) {
		ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
	}

	update(deltaTime) {
		this.position.x += this.speed.x;
		this.position.y += this.speed.y;

		if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
			this.speed.x = -this.speed.x;
		}

		if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
			this.speed.y = -this.speed.y;
		}

		let ballBottom = this.position.y + this.size,
			paddleTop = this.game.paddle.position.y,
			paddleLeftSide = this.game.paddle.position.x,
			paddleRightSide = this.game.paddle.position.x + this.game.paddle.width;

		if (ballBottom >= paddleTop
			&& this.position.x >= paddleLeftSide
			&& this.position.x <= paddleRightSide
		) {
			this.speed.y = -this.speed.y;
		}
	}
}