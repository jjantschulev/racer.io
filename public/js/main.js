var socket = io("localhost:3013");
var imgAssets = [];
var cars = [];
var car;

var terrain = [];

var view = {
  x: 0,
  y: 0,
  zoom: 1
}

function preload() {
  imgAssets.push("./assets/car_green.png");
}

function setup() {
  createCanvas(1000, 800);
  car = new Car();

  for (var i = 0; i < 100; i++) {
    terrain.push(new Tree());
    terrain.push(new Rock());
  }
}

function draw() {
  background(245);
  car.showDebug();

  // zoom in onto car
  translate(width/2, height/2);
  view.x = lerp(view.x, car.pos.x, 0.08);
  view.y = lerp(view.y, car.pos.y, 0.08);
  view.zoom = lerp(view.zoom, 1.1 - 0.2*(car.speed/10.8516614), 0.05);
  scale(view.zoom);
  translate(-view.x, -view.y);

  //react to keyhold
  for (var i = 0; i < keys.length; i++) {
    keyHold(keys[i]);
  }

  //update all cars
  for (var i = 0; i < cars.length; i++) {
    cars[i].update();
    cars[i].show();
  }

  //update terrain
  for (var i = 0; i < terrain.length; i++) {
    terrain[i].show();
  }

  //update players car;
  car.update();
  car.show();

}
