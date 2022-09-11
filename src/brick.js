import { collisionDetected } from "./collisionDetection.js";
export default class Brick {
	constructor(game, position) {
		this.width = 45;
		this.height = 25;

		this.position = position;
		this.game = game;
		this.markedForDeletion = false;
	}

	draw(ctx) {
		this.position.x % 100 === 0 ? ctx.fillStyle = 'hotpink' : ctx.fillStyle = 'limegreen'
		ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
	}

	update(deltaTime) {
		let ball = this.game.ball;
		if (collisionDetected(this, ball)) {
			ball.speed.y = -ball.speed.y;
			this.markedForDeletion = true;
		}
	}
}