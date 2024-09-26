function drawSquare01(squareX, squareY, squareWH) {
  fill(200, 20, 30)
  rect(squareX, squareY, squareWH);
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220, 120, 120);

  //drawSquare01(0, 0, 100);


  // draw a row of Square01
  for (let x = 0; x < width; x += 80) {
    drawSquare01(x, 0, 80, 8);
}
}

function draw() {}
