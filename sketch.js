function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220, 120, 120);

  // draw a row of squares
  for (let x = 0; x < width; x += 160) {
    noStroke()
    square(x, 0, 80);
  }
  //draw a row of circles
  for (let x = 120; x < width; x += 160) {
    noStroke()
    fill(230, 230, 230)
    circle(x, 40, 80);
}
}

function draw() {}
