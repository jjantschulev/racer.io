function Car() {
  //Physics Variables
  this.maxVel = 16;
  this.turningSpeed = 0.05;
  this.pos = createVector(0, 0);
  // this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.speed = 0;
  this.acc = 0.05;
  this.dcc = 0.1;
  this.dir = 0;

  this.drag = 0.01;
  this.turning = false;

  //visual Variables
  this.image = loadImage('./assets/car_green.png');
  this.w = 35;
  this.h = 60;


  //functions
  this.update = function () {
    this.acc = ((this.maxVel - this.speed)**2) / 300;
    if(!this.turning){
      this.drag = (this.speed**2) / 1400;
    }
    this.turning = false;
    if(this.speed > 0){
      this.speed -= this.drag;
    }
    this.vel.setMag(this.speed);
    this.pos.add(this.vel);
  }

  this.show = function () {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.dir);
    imageMode(CENTER);
    rectMode(CENTER);
    // rect(0, 0, this.w, this.h);
    image(this.image, 0, 0, this.w, this.h);
    pop();
  }

  this.showDebug = function () {
    textSize(16);
    fill(0);
    text("acc: " + Math.round(this.acc * 117.1875) + "%", 20, 20);
    text("drag: " + Math.round(this.drag * 100/.085443038) + "%", 20, 40);
    text("speed: " + Math.round(this.speed * 100/10.8516614) + "%", 20, 60);
  }

  //user input
  this.accelerate = function () {
    this.speed += this.acc;
    this.vel.set(sin(this.dir), -cos(this.dir));
  }

  this.brake = function () {
    if(this.speed > 0){
      this.speed -= this.dcc;
      this.vel.set(sin(this.dir), -cos(this.dir));
    }else{
      this.speed = 0;
    }
  }

  this.turn = function (direction) {
    if(this.speed > 0.4){
      this.turning = true;
      this.drag = (this.speed**2) / 1400 + 0.07;
      this.vel.set(sin(this.dir), -cos(this.dir));
      if(direction == -1){
        this.dir -= this.turningSpeed;
      }else if (direction == 1) {
        this.dir += this.turningSpeed;
      }
    }
  }
}
