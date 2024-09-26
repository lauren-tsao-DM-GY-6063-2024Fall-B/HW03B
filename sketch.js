function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, 200, 200);

  // draw a row of 01_square01
  for (let x = 0; x < width; x += 640) {
    noStroke();
    fill(100, 100, 100);
    square(x, 0, 80);
  }

  // draw a row of 01_square02
  for (let x = 80; x < width; x += 640) {
    noStroke();
    fill(120, 120, 120);
    square(x, 0, 80);
  }

  // draw a row of 01_rect
  for (let x = 0; x < width; x += 640) {
    noStroke();
    fill(170, 170, 170);
    rect(x, 80, 160, 80);
  }

  // draw a row of 02_square
  for (let x = 160; x < width; x += 320) {
    noStroke();
    fill(150, 150, 150);
    square(x, 0, 160);
  }

  // draw a row of 03_square01
  for (let x = 320; x < width; x += 640) {
    noStroke();
    fill(170, 170, 170);
    square(x, 0, 80);
  }

  // draw a row of 03_square02
  for (let x = 320; x < width; x += 640) {
    noStroke();
    fill(100, 100, 100);
    square(x, 80, 80);
  }

  // draw a row of 03_square03
  for (let x = 400; x < width; x += 640) {
    noStroke();
    fill(120, 120, 120);
    square(x, 0, 80);
  }

  // draw a row of 03_square01
  for (let x = 400; x < width; x += 640) {
    noStroke();
    fill(170, 170, 170);
    square(x, 80, 80);
  }

  
}

function draw() {}
