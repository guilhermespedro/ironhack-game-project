class Ball {
  constructor(game){
    this.context = game.context;
    this.game = game;
    this.image = new Image();
    this.image.src = '/images/hiclipart.com-id_iicww.png';
    this.ballX = 370;
    this.ballY = 480;
  }
  paint() {
    this.context.drawImage(this.image, 370, 480, 60, 60);
  }
}