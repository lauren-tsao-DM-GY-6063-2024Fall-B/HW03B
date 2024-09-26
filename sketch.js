function triangle03(x, y, w, h, r, s) {
  push();
  translate(x, y);
  rotate(r);
  scale(s);
  triangle(0, 0, h, -h, w, 0);
  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, 200, 200);
  angleMode(DEGREES);

  //Grid Base
  // 01_square row
  for (let x = 0; x < width; x += 640) {
    noStroke();
    fill(100, 100, 100);
    square(x, 0, 80);
  }

  // 01_square row - arc
  for (let x = 0; x < width; x += 640) {
    noStroke();
    fill(200, 200, 200);
    arc(x, 0, 160, 160, 0, 90);
  }

  // 02_square
  for (let x = 80; x < width; x += 640) {
    noStroke();
    fill(120, 120, 120);
    square(x, 0, 80);
  }

  // 03_rect row
  for (let x = 0; x < width; x += 640) {
    noStroke();
    fill(170, 170, 170);
    rect(x, 80, 160, 80);
  }

  // 03_rect row - triangle
  for (let x = 0; x < width; x += 640) {
    noStroke();
    fill(200, 200, 200);
    triangle03(x, 160, 160, 80, 0);
  }

  // 04_square
  for (let x = 160; x < width; x += 320) {
    noStroke();
    fill(150, 150, 150);
    square(x, 0, 160);
  }

  // 04_square row - circle
  for (let x = 240; x < width; x += 640) {
    noStroke();
    fill(200, 200, 200);
    circle(x, 80, 160);
  }

  //04_square row - semi-circle
  for (let x = 480; x < width; x += 640) {
    noStroke();
    fill(200, 200, 200);
    arc(x, 80, 160, 160, 270, 450);
  }

  // 05_square row
  for (let x = 320; x < width; x += 640) {
    noStroke();
    fill(170, 170, 170);
    square(x, 0, 80);
  }

  // 06_square row
  for (let x = 400; x < width; x += 640) {
    noStroke();
    fill(120, 120, 120);
    square(x, 0, 80);
  }

  // 06_square row - triangle
  for (let x = 400; x < width; x += 640) {
    noStroke();
    fill(220, 0, 200);
    triangle03(x, 0, 80, 40, 45, 1.4);
  }

  // 07_square row
  for (let x = 320; x < width; x += 640) {
    noStroke();
    fill(100, 100, 100);
    square(x, 80, 80);
  }

  // 08_square row
  for (let x = 400; x < width; x += 640) {
    noStroke();
    fill(170, 170, 170);
    square(x, 80, 80);
  }

}

function draw() {}
