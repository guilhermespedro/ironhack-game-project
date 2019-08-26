class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.background = new Background(this);
    this.timer=0;
    this.SPEED=300;
    };
    start () {
      this.loop(0);
    }
    loop (timestamp) {
      if (this.timer < timestamp - this.SPEED) {
        this.update();
        this.timer = timestamp;
      }
      window.requestAnimationFrame((timestamp) => this.loop(timestamp));
    }
    update(){
      this.paint();
    }
    paint(){
      this.background.paint();
    }
  }
 