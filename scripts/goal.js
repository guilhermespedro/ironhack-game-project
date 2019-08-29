class Goal {
  constructor(game){
    this.game = game;
    this.width = 500;
    this.height = 200;
    this.horizontalGap = (this.game.canvas.width - this.width) / 2;
    this.verticalGap = 50;
  }

  detectColision () {
    const ball = this.game.ball;
    return (
      ball.x > this.horizontalGap &&
      ball.x < this.horizontalGap + this.width &&
      ball.y > this.verticalGap &&
      ball.y < this.verticalGap + this.height
    );
  }

  paint () {
    const context = this.game.context;
    context.save();

    context.strokeStyle = "white";

    context.beginPath();
    context.strokeRect(this.horizontalGap, this.verticalGap , this.width, this.height);
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
    context.moveTo(225, 175);
    context.lineTo(150, 50); 
    context.stroke();
    context.closePath();
    
    context.beginPath();
    context.moveTo(725, 175);
    context.lineTo(650, 50);
    context.stroke();
    context.closePath();
    
    context.strokeStyle = "black";

    context.beginPath();
    context.moveTo(225,175);
    context.lineTo(725, 175);
    context.stroke();
    context.closePath();

    context.restore();
  }
}