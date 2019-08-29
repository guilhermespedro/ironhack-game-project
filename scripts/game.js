class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.heigth = this.canvas.heigth;
    this.SCORE_LINE_HEIGHT = 180;
    this.SPEED = 5;
    this.callbacks = {
      left: () => this.arrow.isMovingLeft(),
      right: () => this.arrow.isMovingRight()
    }
    this.control = new Control(this.callbacks);
    // this.control.setKeyBindings();
    this.reset();
  };

  reset () {
    this.background = new Background(this);
    this.goal = new Goal(this);
    this.arrow = new Arrow(this);
    this.ball = new Ball(this, this.arrow);
    this.keeper = new Keeper(this);
    this.collision = null;
    this.timer = 0;
  }

  nextAttempt () {
    this.reset();
  }

  start() {
    this.loop(0);
  }

  loop(timestamp) {
    this.update(timestamp);
    this.paint();
    window.requestAnimationFrame((timestamp) => this.loop(timestamp));
  }

  update(timestamp) {
    if (this.timer < timestamp - this.SPEED) {
      this.timer = timestamp;
      this.ball.update();
    }
    //this.paint();
    this.arrow.update();
    this.control.update();
    this.keeper.update();
    const ballCollidedWithGoal = this.goal.detectColision();
    if (ballCollidedWithGoal) {
      const ballCollidedWithKeeper = this.keeper.checkCollision();
      if (ballCollidedWithKeeper) {
        this.ball.vy *= -1;
      }
      if (ballCollidedWithKeeper) console.log('Ball colided with keeper');
    }
  }

  paint() {
    this.clear()
    this.background.paint();
    this.goal.paint();
    this.ball.paint();
    this.keeper.paint();
    this.arrow.paint();
  }

  clear() {
    const width = this.canvas.width;
    const height = this.canvas.height;
    this.context.clearRect(0, 0, width, height);
  }
  //((this.keeper.collisionGKX < this.ball.ballX + this.ball.ballWidth) && ( this.keeper.collisionGKX + this.keeper.collisionGKHeight < this.ball.ballX)

  // bounceTheBall() {
  //   function update() {
  //     // context.clearRect(0,0, canvas.width, canvas.height);
  //     this.ball.draw();
  //     this.ball.x += ball.vx;
  //     this.ball.y += ball.vy;
  //     if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
  //     ball.vy *= -1;
  //   }
  //   if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
  //     ball.vx *= -1;
  //   }
  //   }

  //   setInterval(update, 20)

  // }
  // image(){
  //   this.ball.image();
  // }
}