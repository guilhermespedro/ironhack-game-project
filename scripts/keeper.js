const keeperRightJumpImage = new Image();
keeperRightJumpImage.src = "/images/keeper-right-jump.png";
const keeperLeftJumpImage = new Image();
keeperLeftJumpImage.src = "/images/keeper-left-jump.png";
const keeperStandingImage = new Image();
keeperStandingImage.src = "/images/keeper-standing.png";

class Keeper {
  constructor(game) {
    this.context = game.context;
    this.game = game;
    this.x = 300;
    this.y = 80;
    this.vx = 5;
    // this.width = 470;
    // this.height = 170;
    this.width = 258;
    this.height = 194;
    // right side
    this.collisionGKX = this.x+250 
    this.collisionGKWidth = 200
    this.collisionGKHeight = 170
    this.images = {
      right: keeperRightJumpImage,
      left: keeperLeftJumpImage,
      center: keeperStandingImage
    }
  }

  checkCollision () {
    const ball = this.game.ball;
    const arrow = this.game.arrow;
    const SCORE_LINE_HEIGHT = this.game.SCORE_LINE_HEIGHT;
    return (
      ball.x > this.x &&
      ball.x < this.x + this.width &&
      ball.y > this.y &&
      ball.y < this.y + this.height
    );
  }

  paint() {
    let image;
    if (this.x < 250) {
      image = this.images.left;
    } else if (this.x < 350) {
      image = this.images.center;
    } else {
      image = this.images.right;
    }
    const context = this.context;
    context.fillStyle = 'red';
    // context.fillRect(this.x, this.y, this.width, this.height)
    context.drawImage(image, this.x, this.y, this.width, this.height);
  }

  saveTheBallRandomly() {

  }

  update() {
    if (this.x > 400) {
      this.vx *= -1;
    } else if (this.x < 150) {
      this.vx *= -1;
    }
    this.x += this.vx;
  }
  // meter dentro do update uma condição que o gk segue o angulo em que a seta aponta na maior parte das vezes 
}
