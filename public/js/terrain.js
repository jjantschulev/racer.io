function Tree() {
  this.x = random(-width*2, width*2);
  this.y = random(-height*2, height*2);
  this.size = random(40, 60);

  this.show = function () {
    fill(57, 249, 95);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }
}

function Rock() {
  this.x = random(-width*2, width*2);
  this.y = random(-height*2, height*2);
  this.size = random(15, 30);

  this.show = function () {
    fill(100);
    noStroke();
    rect(this.x, this.y, this.size, this.size);
  }
}
