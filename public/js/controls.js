var keys = [];

function keyDown(k) {

}

function keyHold(k) {
  if(k == 65){
    car.turn(-1);
  }
  if(k == 68){
    car.turn(1);
  }
  if(k == 87){
    car.accelerate();
  }
  if(k == 83){
    car.brake();
  }
}


window.addEventListener('keydown', function () {
  var addKeyToArray = true;
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] == event.which) {
      addKeyToArray = false;
    }
  }
  if (addKeyToArray) {
    keys.push(event.which);
  }
  keyDown(event.which);
});
window.addEventListener('keyup', function () {
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] == event.which) {
      keys.splice(i, 1);
    }
  }
});
