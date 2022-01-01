import Game from "./game.js";

let gameCanvas = document.getElementById("gameCanvas");
let ctx = gameCanvas.getContext("2d");

const GAME_WIDTH = gameCanvas.width;
const GAME_HEIGHT = gameCanvas.height;

gameCanvasInit();

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();

function gameCanvasInit() {
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
}

let lastTime = 0;

function gameLoop(timeStamp) {
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  gameCanvasInit();

  game.draw(ctx);
  game.update(deltaTime);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
