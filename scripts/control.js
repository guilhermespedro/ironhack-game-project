class Control { 
  constructor (callbacks) {
    this.callbacks = callbacks;
    this.shoot = true      
  
  }
  setKeyBindings () {
    window.addEventListener('keydown', event => {
      event.preventDefault();
      if (event.keyCode === 37) {
        this.callbacks.isMovingLeft = true
        console.log("turn left");
      }
      if (event.keyCode === 39) {
        this.callbacks.isMovingRight = true 

        console.log("turn right");
      }
      if (event.keyCode === 32) {
        this.shoot = true
        console.log("SHOOT");
      }
    });
    window.addEventListener('keyup', event => {
      if (event.keyCode === 37) {
        this.callbacks.isMovingLeft = false
        console.log('stop moving');
      }
      if (event.keyCode === 39) {
        this.callbacks.isMovingRight = false
        console.log('stop moving');
      }
      if (event.keyCode === 32) {
        this.callbacks.stop = false
        console.log('stop shooting');
      }
      
    });
  }
  update() {
    if(this.isMovingLeft) this.angle-= 0.05;
    if(this.isMovingRight) this.angle+= 0.05;
    // console.log("arrow update", this.angle)
  }
}