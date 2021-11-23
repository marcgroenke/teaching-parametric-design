function setup() {
  createCanvas(400, 400);
  background(255);
  noStroke();
  noLoop();
}

function draw() {
  drawTarget(width * 0.5, height * 0.5, 300, 12);
}

function drawTarget(xloc, yloc, size, num) {
  const graycolor = 255 / num;
  const steps = size / num;
  for (let i = 0; i < num; i++) {
    fill(i * graycolor);
    ellipse(xloc, yloc, size - i * steps, size - i * steps);
  }
}
