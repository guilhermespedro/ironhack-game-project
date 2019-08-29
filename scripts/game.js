class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.heigth = this.canvas.heigth;
    this.background = new Background(this);
    this.arrow = new Arrow(this);
    this.ball = new Ball(this,this.arrow);
    this.keeper = new Keeper(this);
    this.timer=0;
    this.SPEED=300;
    this.collision = false;
    this.callbacks = {
      left: this.arrow.isMovingLeft,
      right: this.arrow.isMovingRight
    }
    this.control = new Control(this.callbacks);
    const BALL_SPEED = 30;
    // this.control.setKeyBindings();
    };
    start () {
      this.loop(0);
    }
    loop (timestamp) {
      if (this.timer < timestamp - this.SPEED) {
        this.update();
        this.timer = timestamp;
      }
      window.requestAnimationFrame((timestamp) => this.loop(timestamp));
    }
    update(){
      this.paint();
      this.arrow.update();
      this.control.update();
      this.ball.update();
      this.keeper.update();
      // this.image();
    }
    paint(){
      this.clear()
      this.background.paint();
      this.ball.paint();
      this.keeper.paint();
      this.arrow.paint();
    }

    clear () {
      const width = this.canvas.width;
      const height = this.canvas.height;
      this.context.clearRect(0, 0, width, height);
    }
    checkCollisionKeeper () {
      if (((this.keeperX < this.ballX + this.ballWidth) && ( this.keeperX + this.keeperWidth > this.ballX)
        && (this.keeperY < this.ballY + this.ballHeight) && (this.keeperY + this.keeperHeight > this.ballY))) {
          this.collision = true;
          console.log("save!")
        } 
        else if  (((this.angle > 0.7000000000000001) && (this.angle < 1.5500000000000007))
        || ((this.angle < -0.8500000000000001) && (this.angle > -1.5000000000000007))) {
          this.collision = false;
          console.log("missed!");
          }
         else { 
          this.collision = false; 
          console.log("GOAL!");
        }
   }
    // image(){
    //   this.ball.image();
    // }
  }
 