import { collisionDetected } from "./collisionDetection.js";
export default class Brick {
	constructor(game, position) {
		this.width = 50;
		this.height = 20;

		this.position = position;
		this.game = game;
		this.markedForDeletion = false;
	}

	draw(ctx) {
		ctx.fillStyle = 'limegreen';
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