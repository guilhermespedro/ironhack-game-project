class Arrow {
  constructor(game) {
    this.game = game;
    this.SHOOTER_SIZE = -470;
    const MAX_TOP_SIZE = 400;
    this.width = this.game.canvas.width;
    this.heigth = this.game.canvas.heigth;
    this.bottomX = 0;
    this.bottomY = 0;
    this.angle = 0;
    this.movementDirection = 1;
    this.isMovingLeft = false;
    this.isMovingRight = false;
    this.topX = this.bottomX;
    this.topY = this.SHOOTER_SIZE;
  }
  paint() {
    const context = this.game.context;
    context.save();
    context.translate(this.width / 2, this.height);
    context.rotate(this.angle);
    context.beginPath();
    context.moveTo(410, 470);
    context.lineTo(390, 470);
    context.strokeStyle = "yellow";
    context.stroke();
    context.lineTo(390, 390)
    context.stroke();
    context.lineTo(370, 390);
    context.stroke();
    context.lineTo(400, 355);
    context.stroke();
    context.lineTo(430, 390);
    context.stroke();
    context.lineTo(410, 390);
    context.stroke();
    context.lineTo(410, 470);
    context.stroke();
    context.fill();
    context.restore();

    // context.translate(150, 75);
    // context.rotate(Math.PI / 2);
    // context.translate(-150, -75);
    // context.closePath();
  }
  update() {
    // console.log("DEBUG update arrow")
    if(this.isMovingLeft) {
      console.log("DEBUG moving left")
      this.angle-= 0.02};
    if(this.isMovingRight) this.angle+= 0.02;
    // console.log("arrow update", this.angle)
  }
}