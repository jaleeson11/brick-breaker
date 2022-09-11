import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";
import { buildLevel, level1, level2, level3 } from "./levels.js";

const GAMESTATE = {
	RUNNING: 0,
	PAUSED: 1,
	GAMEOVER: 2,
	MENU: 3,
	MOBILE: 4,
}
export default class Game {
	constructor(gameWidth, gameHeight) {
		this.gameWidth = gameWidth;
		this.gameHeight = gameHeight;
		const mediaQuery = window.matchMedia('(max-width: 768px)');
		if (mediaQuery.matches) this.gamestate = GAMESTATE.MOBILE;
		else this.gamestate = GAMESTATE.MENU;
		this.ball = new Ball(this);
		this.paddle = new Paddle(this);
		this.bricks = [];
		new InputHandler(this.paddle, this);
		this.gameObjects = [];
		this.lives = 3;
		this.levels = [level1, level2, level3];
		this.currentLevel = 0;
	}

	start() {		
		this.bricks = buildLevel(this.levels[this.currentLevel], this);
		this.gameObjects = [
			this.paddle,
			this.ball
		];
		this.gamestate = GAMESTATE.RUNNING;
	}

	togglePause() {
		if (this.gamestate == GAMESTATE.RUNNING) {
			this.gamestate = GAMESTATE.PAUSED;
		} else {
			this.gamestate = GAMESTATE.RUNNING;
		}
	}

	draw(ctx) {
		[...this.gameObjects, ...this.bricks].forEach((object) => object.draw(ctx));

		if (this.gamestate == GAMESTATE.PAUSED) {
			this.drawOverlay(ctx, 'Paused');
		}

		if (this.gamestate == GAMESTATE.MENU) {
			this.drawOverlay(ctx, 'Press Spacebar to Start');
		}

		if (this.gamestate == GAMESTATE.MOBILE) {
			this.drawOverlay(ctx, 'Try me on desktop!');
		}

		if (this.gamestate == GAMESTATE.GAMEOVER) {
			this.drawOverlay(ctx, 'Game Over');
			this.gameObjects = [];
		}
	}

	drawOverlay(ctx, text) {
		ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
		ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);
		ctx.font = '30px Arial';
		ctx.fillStyle = 'white';
		ctx.textAlign = 'center';
		ctx.fillText(text, this.gameWidth / 2, this.gameHeight / 2);
	}

	update(deltaTime) {
		if (this.lives == 0) {
			this.gamestate = GAMESTATE.GAMEOVER;
		}
		if (this.gamestate == GAMESTATE.PAUSED ||
			this.gamestate == GAMESTATE.MENU ||
			this.gamestate == GAMESTATE.GAMEOVER ||
			this.gamestate == GAMESTATE.MOBILE
		) {
			return;
		}
		if (this.bricks.length == 0) {
			this.currentLevel++;
			this.ball.reset();
			this.start();
		}
		[...this.gameObjects, ...this.bricks].forEach((object) => object.update(deltaTime));
		this.bricks = this.bricks.filter((object) => !object.markedForDeletion);
	}
}