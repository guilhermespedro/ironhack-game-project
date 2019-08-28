class Keeper {
  constructor(game) {
    this.context = game.context;
    this.game = game;
    this.image = new Image();
    this.image.src = "/images/goalkeeper-football-illustration-cartoon-goalkeeper-thumbnail.jpg";

  }
  paint() {
    this.context.drawImage(this.image, 360, 90, 70, 170);
  }
  saveTheBallRandomly() {

  }
}
