class Arrow {
  constructor(game) {
    this.game = game;
  }
  paint() {
    const context = this.game.context;
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
    // context.translate(150, 75);
    // context.rotate(Math.PI / 2);
    // context.translate(-150, -75);
    context.closePath();
  }
}