class Keeper {
  constructor(game) {
    this.context = game.context;
    this.game = game;
    this.image = new Image();
    this.image.src = "/images/keeper-right-jump.png";
    this.keeperX = 160;
    this.keeperY = 90;
    this.keeperWidth = 470;
    this.keeperHeight = 170;
    // this.image.src = "/images/keeper-standing.png"  KEEPER STANDING PHOTO
    // this.image.src = "/images/keeper-left-jump.png"   KEEPER JUMP TO LEFT SIDE PHOTO

  }
  paint() {
    this.context.drawImage(this.image, 160, 90, 470, 170);
  }
  saveTheBallRandomly() {

  }
  update() {
    
  }
}
