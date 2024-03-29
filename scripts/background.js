class Background {
  constructor(game){
    this.game = game;
    this.goalWidth = 500;
    this.goalHeight = 200;
  }
  paint () {
    const context = this.game.context;
    // context.beginPath();
    // context.moveTo(150, 250);
    // context.lineTo(150, 50);
    // context.strokeStyle = "white";
    // context.stroke();
    // context.lineTo(650, 50);
    // context.stroke();
    // context.lineTo(650, 250);
    // context.stroke();
    // context.closePath();

    context.beginPath();
    context.moveTo(0, 250)
    context.lineTo(800, 250);
    context.strokeStyle = "white";
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(75, 250)
    context.lineTo(75, 400);
    context.stroke();
    context.lineTo(725, 400);
    context.stroke();
    context.lineTo(725, 250);
    context.strokeStyle = "white";
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(5, 250)
    context.lineTo(5, 750);
    context.strokeStyle = "white";
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(795, 250)
    context.lineTo(795, 750);
    context.strokeStyle = "white";
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(400, 500, 10, 0, Math.PI * 2);
    context.lineWidth = 3;
    context.strokeStyle = "white"; // !
    context.stroke();
    context.closePath();

// Possible goals

    // context.beginPath();
    // context.arc(185, 100, 15, 0, Math.PI * 2);
    // context.lineWidth = 3;
    // context.strokeStyle = "red"; // !
    // context.stroke();
    // context.closePath();

    // context.beginPath();
    // context.arc(600, 100, 15, 0, Math.PI * 2);
    // context.lineWidth = 3;
    // context.strokeStyle = "red"; // !
    // context.stroke();
    // context.closePath();

    // context.beginPath();
    // context.arc(600, 200, 15, 0, Math.PI * 2);
    // context.lineWidth = 3;
    // context.strokeStyle = "red"; // !
    // context.stroke();
    // context.closePath();
    
    // context.beginPath();
    // context.arc(185, 200, 15, 0, Math.PI * 2);
    // context.lineWidth = 3;
    // context.strokeStyle = "red"; // !
    // context.stroke();
    // context.closePath();

    // context.beginPath();
    // context.arc(400, 100, 15, 0, Math.PI * 2);
    // context.lineWidth = 3;
    // context.strokeStyle = "red"; // !
    // context.stroke();
    // context.closePath();

    // context.beginPath();
    // context.arc(400, 200, 15, 0, Math.PI * 2);
    // context.lineWidth = 3;
    // context.strokeStyle = "red"; // !
    // context.stroke();
    // context.closePath();

    }
}