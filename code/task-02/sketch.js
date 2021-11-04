let colorValue;
let xValue;

let yValue = 5;
let textColor = "green";
let trueFalse = true; // false

function setup() {
  createCanvas(400, 400);
  frameRate (5);
  colorValue = random(0, 255);
  xValue = 0;
}

function draw() {
  background(255);
  fill(xValue)
  
  for (let i = 0; i < 10; i += 1)
  
  circle (100 + i * 20, 200, 10);
  xValue += 5;
  
}
