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
    this.scoreLineHeight = 180;
    this.SPEED=5;
    // this.ball.ballY = 480;
    this.collision = "";
    this.callbacks = {
      left: this.arrow.isMovingLeft,
      right: this.arrow.isMovingRight
    }
    this.control = new Control(this.callbacks);
    // this.control.setKeyBindings();
    };
    start () {
      this.loop(0);
    }
    loop (timestamp) {
        this.paint()
        this.update(timestamp);
        window.requestAnimationFrame((timestamp) => this.loop(timestamp));
      }




      update(timestamp){
      if (this.timer < timestamp - this.SPEED) {
        this.timer = timestamp;
        this.ball.update();

      }
      //this.paint();
      this.arrow.update();
      this.control.update();
      this.keeper.update();
      this.checkCollisionKeeper();
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
    //((this.keeper.collisionGKX < this.ball.ballX + this.ball.ballWidth) && ( this.keeper.collisionGKX + this.keeper.collisionGKHeight < this.ball.ballX)

    checkCollisionKeeper() {  
      if (this.ball.ballY <  this.scoreLineHeight) {  
      if ((this.scoreLineHeight > this.ball.ballY + this.ball.ballHeight)
      && (this.keeper.keeperX + this.keeper.collisionGKHeight > this.ball.ballY)) {
          this.collision = "save" 
          // && (this.vx *= -1) && (this.vy *=-1)
          console.log("save!")
        } 
        else if  (((this.arrow.angle > 0.7000000000000001) && (this.arrow.angle < 1.5500000000000007))
        || ((this.arrow.angle > -0.8500000000000001) && (this.arrow.angle < -1.5000000000000007))) {
          this.collision = "miss";
          console.log("missed!");
          }
         else { 
          this.collision = "goal"; 
          console.log("GOAL!");
        }
        console.log(this.arrow.angle)
   }
  //  console.log("ball Y",this.ball.ballY, "keeper y", this.keeper.keeperY," -------", "ball x", this.ball.ballX, "keeper x", this.keeper.collisionGKX )

  }

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
 