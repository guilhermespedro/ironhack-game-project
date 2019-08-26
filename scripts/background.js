class Background {
  constructor(game){
    this.game = game;
  }
  paint () {
    const context = this.game.context;
    context.beginPath();
    context.moveTo(150, 250);
    context.lineTo(150, 50);
    context.stroke();
    context.lineTo(650, 50);
    context.stroke();
    context.lineTo(650, 250);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(150, 250);
    context.lineTo(225, 175);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(650, 250);
    context.lineTo(725, 175);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(225,175);
    context.lineTo(725, 175);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(225, 175);
    context.lineTo(150, 50);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(725, 175);
    context.lineTo(650, 50);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(0, 250)
    context.lineTo(800, 250);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(75, 250)
    context.lineTo(75, 400);
    context.stroke();
    context.lineTo(725, 400);
    context.stroke();
    context.lineTo(725, 250);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(5, 250)
    context.lineTo(5, 750);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(795, 250)
    context.lineTo(795, 750);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(400, 500, 10, 0, Math.PI * 2);
    context.lineWidth = 3;
    context.strokeStyle = "white"; // !
    context.stroke();
    context.closePath();

    }
}