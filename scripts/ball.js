class Ball {
  constructor(game){
    this.context = game.context;
    this.game = game;
    this.image = new Image();
    this.image.src = '/images/hiclipart.com-id_iicww.png';
    this.ballX = 370;
    this.ballY = 480;
    this.vx = 0;
    this.vy = 0;
    this.shoot = false;
    this.ballSpeed = 40;
    this.ballWith = 70;
    this.ballHeight = 60;
    //this.angle = game.arrow.angle


    window.addEventListener('keydown', event => {
      event.preventDefault();

      if (event.keyCode === 32) {
        this.shoot = true
        //shoot(ball);
        console.log("SHOOT", this.game.arrow.angle);
      }
    });
    window.addEventListener('keyup', event => {

      if (event.keyCode === 32) {
        this.stop = false
        console.log('stop shooting');
      }
      
    })
  
  }
  paint() {
    this.context.drawImage(this.image, this.ballX, this.ballY , 70, 60);
  }
  update() {
    if(this.shoot) {
    
      this.vx = this.ballSpeed * Math.sin(this.game.arrow.angle);
      this.vy = this.ballSpeed * Math.cos(this.game.arrow.angle)*-1;
    this.ballX += this.vx;
    this.ballY += this.vy;
  }
  }
  stop() {
    this.vx = 0;
    this.vy = 0;
  }
  isMoving () {
    return this.vx !== 0 || this.vy !==0 
  }
  shoot() {
    this.vx = this.ballSpeed * Math.sin(90);
    this.vy = this.ballSpeed * Math.cos(90);
  }
  setToShoot(ball) {
    this.ballX = this.width/2 + 100 * Math.sin(this.angle);
    this.ballY = this.height - 100  * Math.cos(this.angle);
  }
  clear(){
    context.clearRect(0,0,this.width, this.height);
  }
}