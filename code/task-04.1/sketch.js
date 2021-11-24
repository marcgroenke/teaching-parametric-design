let x = 0;
let y = 0;
let kommando = 20;

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  stroke("red");
  if (random(1) < 0.5) {
    line(x, y, x + kommando, y + kommando);
  } else {
    line(x, y + kommando, x + kommando, y);
  }
  x = x + kommando;
  if (x > width) {
    x = 0;
    y = y + kommando;
  }
}