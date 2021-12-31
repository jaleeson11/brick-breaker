import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";

let gameCanvas = document.getElementById("gameCanvas");
let ctx = gameCanvas.getContext("2d");

const GAME_WIDTH = gameCanvas.width;
const GAME_HEIGHT = gameCanvas.height;

gameCanvasInit();

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT),
	ball = new Ball(GAME_WIDTH, GAME_HEIGHT);
	
paddle.draw(ctx);

new InputHandler(paddle);

function gameCanvasInit() {
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
}

let lastTime = 0;

//images
let gameBall = document.getElementById('gameBall');
console.log(gameBall);

function gameLoop(timeStamp) {
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  gameCanvasInit();

  paddle.update(deltaTime);
  paddle.draw(ctx);

  ball.draw(ctx);
  ball.update(deltaTime);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
