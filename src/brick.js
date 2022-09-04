export default class Brick {
	constructor(game, position) {
		this.width = 50;
		this.height = 20;

		this.position = position;
		this.game = game;
	}

	draw(ctx) {
		ctx.fillStyle = 'limegreen';
		ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
	}

	update(deltaTime) {
		let ball = this.game.ball,
			gameObjects = this.game.gameObjects, 
			brickLeftSide = this.position.x,
			brickRightSide = this.position.x + this.width,
			brickBottom = this.position.y + this.height;

		if (ball.position.y < brickBottom &&
			ball.position.x >= brickLeftSide &&
			ball.position.x + ball.size <= brickRightSide) {
			ball.speed.y = -ball.speed.y;
			gameObjects.splice(gameObjects.indexOf(this), 1);
		}
	}
}