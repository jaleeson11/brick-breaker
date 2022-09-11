import { collisionDetected } from "./collisionDetection.js";
export default class Ball {
	constructor(game) {
		this.image = document.getElementById('gameBall');

		this.game = game;

		this.position = {x: 10, y: 50};
		this.speed = {x: 4, y: 4};
		this.size = 16;

		this.gameWidth = game.gameWidth;
		this.gameHeight = game.gameHeight;
	}

	draw(ctx) {
		ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
	}

	reset() {
		this.position = {x: 10, y: 50};
	}

	update(deltaTime) {
		this.position.x += this.speed.x;
		this.position.y += this.speed.y;

		if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
			this.speed.x = -this.speed.x;
		}

		if (this.position.y < 0) {
			this.speed.y = -this.speed.y;
		}

		if (this.position.y + this.size > this.gameHeight) {
			this.game.lives--;
			this.reset();
		}

		if (collisionDetected(this.game.paddle, this)) {
			this.speed.y = -this.speed.y;
		}
	}
}