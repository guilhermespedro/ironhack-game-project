class Ball {
  constructor(game){
    this.context = game.context;
    this.game = game;
    this.image = new Image();
    this.image.src = '/images/hiclipart.com-id_iicww.png';
    this.x = 370;
    this.y = 480;
    this.vx = 0;
    this.vy = 0;
    this.shooting = false;
    this.ballSpeed = 15;
    this.ballWith = 70;
    this.ballHeight = 60;
    this.bindControls();
  }
  
  bindControls () {
    window.addEventListener('keydown', event => {
      event.preventDefault();
      if (event.keyCode === 32) {
        this.shooting = true;
        // console.log("SHOOT", this.game.arrow.angle);
      }
    });
  
    // window.addEventListener('keyup', event => {
    //   if (event.keyCode === 32) {
    //     // this.stop = false;
    //     // console.log('stop shooting');
    //   }
    // })
  }

  paint() {
    this.context.drawImage(this.image, this.x, this.y , 70, 60);
  }

  update() {
    // console.log(this.vy)
    if(this.shooting) {
      if (!this.vy) {
        this.vx = this.ballSpeed * Math.sin(this.game.arrow.angle);
        this.vy = this.ballSpeed * Math.cos(this.game.arrow.angle) * -1;
      }
      this.x += this.vx;
      this.y += this.vy;
      if (
        this.y < -50 ||
        this.y > this.game.canvas.height ||
        this.x < 0 ||
        this.x > this.game.canvas.width
      ) {
        this.shooting = false;
        this.game.nextAttempt();
      }
    }
  }

  isMoving () {
    return this.vx !== 0 || this.vy !==0;
  }
}