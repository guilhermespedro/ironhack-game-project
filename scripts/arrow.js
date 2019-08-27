class Arrow {
  constructor(game) {
    this.game = game;
    this.arrowSize = -470;
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
    this.topY = this.arrowSize;

    window.addEventListener('keydown', event => {
      event.preventDefault();
      if (event.keyCode === 37) {
        this.isMovingLeft = true
        console.log("turn left");
      }
      if (event.keyCode === 39) {
        this.isMovingRight = true 

        console.log("turn right");
      }
      if (event.keyCode === 32) {
        this.shoot = true
        console.log("SHOOT");
      }
    });
    window.addEventListener('keyup', event => {
      if (event.keyCode === 37) {
        this.isMovingLeft = false
        console.log('stop moving');
      }
      if (event.keyCode === 39) {
        this.isMovingRight = false
        console.log('stop moving');
      }
      if (event.keyCode === 32) {
        this.stop = false
        console.log('stop shooting');
      }
      
    })
  }
  paint() {
    const context = this.game.context;
    context.save();
    // context.translate(50,50);
    // context.translate(this.width / 2, this.heigth);
    context.translate(400, 500);
    context.rotate(this.angle);
    context.beginPath();
    context.moveTo(this.bottomX, this.bottomY);
    // context.lineTo(this.topY/2, this.arrowSize);
    context.stroke();
    context.moveTo(410 - 400, 470 - 525);
    context.lineTo(390 - 400, 470 - 525);
    context.strokeStyle = "yellow";
    context.stroke();
    context.lineTo(390 - 400, 390 - 525);
    context.stroke();
    context.lineTo(370 - 400, 390 - 525);
    context.stroke();
    context.lineTo(400 - 400, 355 - 525);
    context.stroke();
    context.lineTo(430 - 400, 390 - 525);
    context.stroke();
    context.lineTo(410 - 400, 390 - 525);
    context.stroke();
    context.lineTo(410 - 400, 470 - 525);
    context.stroke();
    context.fill();
    context.restore();

    // context.translate(150, 75);
    // context.rotate(Math.PI / 2);
    // context.translate(-150, -75);
    // context.closePath();
  }



  
  update() {
    //console.log("DEBUG update arrow")
    if(this.isMovingLeft) {
      console.log("DEBUG moving left")
      this.angle-= 0.05
    };
    if(this.isMovingRight) this.angle+= 0.05;
    // console.log("arrow update", this.angle)
  }
}