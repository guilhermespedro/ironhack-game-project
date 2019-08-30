class Ball {
  constructor(game){
    this.context = game.context;
    this.game = game;
    this.image = new Image();
    this.image.src = '/images/hiclipart.com-id_iicww.png';
    this.baseImage = new Image();
    this.baseImage.src = '/images/imgbin-goal-football-football-goal-s-goal-soccer-illustration-NE6PVRqzEHeYLeWiKgT3DFsRS.jpg';
    this.x = 370;
    this.y = 480;
    this.vx = 0;
    this.vy = 0;
    this.scoreWidth = 700;
    this.sound = new Audio();
    this.sound.src = "/Sounds/36796__alexpadina__goal1.wav"
    this.shooting = false;
    this.ballSpeed = 5;
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
        this.x > this.game.canvas.width ||
        this.y < this.game.SCORE_LINE_HEIGHT -70
      ) {
        console.log("GOOOOL   ")
        this.shooting = false;
        this.score++;
        this.game.nextAttempt();
      }
    }

    if (
      this.game.SCORE_LINE_HEIGHT-70>this.y && 
      this.x > this.game.goal.verticalGap && 
      this.x < this.scoreWidth
      ){
      this.game.score++
      this.sound.play('goal', {volume: 1 });
      // this.context.drawImage('/images/imgbin-goal-football-football-goal-s-goal-soccer-illustration-NE6PVRqzEHeYLeWiKgT3DFsRS.jpg', 100, 100);

      console.log("stoooop")
      console.log(this.x)
      this.ballSpeed = 0
      this.game.SPEED = 0
      this.vy= 0
      this.vx =0
    }
  }

  isMoving () {
    return this.vx !== 0 || this.vy !==0;
  }
}