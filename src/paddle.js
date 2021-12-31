export default class Paddle {
    constructor(gameWidth, gameHeight) {
      this.gameWidth = gameWidth;
      this.width = 100;
      this.height = 10;

      this.speed = 0;
      this.maxSpeed = 30;
  
      this.position = {
        x: gameWidth / 2 - this.width / 2,
        y: gameHeight - this.height - 10
      }
    }
  
    draw(ctx) {
      ctx.fillStyle = "red";
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  
    update(deltaTime) {
      if (this.position.x < 0) this.position.x = 0;

      if (this.position.x + this.width > this.gameWidth) 
        this.position.x = this.gameWidth - this.width;

      this.position.x += this.speed / deltaTime;
    }

    moveLeft() {
      this.speed = -this.maxSpeed;
    }

    moveRight() {
      this.speed = this.maxSpeed;
    }

    stop() {
      this.speed = 0;
    }
  }