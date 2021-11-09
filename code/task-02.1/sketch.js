function setup() {
  createCanvas(400, 400, WEBGL);
  noStroke();
}

function draw() {
  background(255);
  rotateY(frameCount / 40);
  normalMaterial();
  beginShape(TRIANGLE_STRIP);
  normal(-1, 1, 1);
  vertex(-100, 100, 0);

  normal(2, 10, 15);
  vertex(-100, -100, 100);
  vertex(100, 100, 100);

  normal(1, 1, 1);
  vertex(100, -100, 100);
  endShape();
}