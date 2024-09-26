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

  // column of 01_square row 01
  for (let y = 0; y < height; y += 320) {
    // 01_square row
    for (let x = 0; x < width; x += 640) {
      noStroke();
      fill(100, 100, 100);
      square(x, y, 80);
    }
  }

    // column of 01_square row 02
    for (let y = 160; y < height; y += 320) {
      // 01_square row
      for (let x = 160; x < width; x += 640) {
        noStroke();
        fill(100, 100, 100);
        square(x, y, 80);
      }
    }

  // column of 01_square row - arc 01
  for (let y = 0; y < height; y += 320) {
    // 01_square row - arc
    for (let x = 0; x < width; x += 640) {
      noStroke();
      fill(200, 200, 200);
      arc(x, y, 160, 160, 0, 90);
    }
  }

    // column of 01_square row - arc 02
  for (let y = 160; y < height; y += 320) {
    // 01_square row - arc
    for (let x = 160; x < width; x += 640) {
      noStroke();
      fill(200, 200, 200);
      arc(x, y, 160, 160, 0, 90);
    }
  }

  // column of 02_square row 01
  for (let y = 0; y < height; y += 320) {
    // 02_square row
    for (let x = 80; x < width; x += 640) {
      noStroke();
      fill(120, 120, 120);
      square(x, y, 80);
    }
  }

  // column of 02_square row 02
  for (let y = 160; y < height; y += 320) {
    // 02_square row
    for (let x = 240; x < width; x += 640) {
      noStroke();
      fill(120, 120, 120);
      square(x, y, 80);
    }
  }

  // column of 03_rect row 01
  for (let y = 80; y < height; y += 320) {
    // 03_rect row
    for (let x = 0; x < width; x += 640) {
      noStroke();
      fill(170, 170, 170);
      rect(x, y, 160, 80);
    }
  }

  // column of 03_rect row 02
  for (let y = 240; y < height; y += 320) {
    // 03_rect row
    for (let x = 160; x < width; x += 640) {
      noStroke();
      fill(170, 170, 170);
      rect(x, y, 160, 80);
    }
  }

  // column of 03_rect row - triangle 01
  for (let y = 160; y < height; y += 320) {
    // 03_rect row - triangle
    for (let x = 0; x < width; x += 640) {
      noStroke();
      fill(200, 200, 200);
      triangle03(x, y, 160, 80, 0);
    }
  }

  // column of 03_rect row - triangle 02
  for (let y = 320; y < height; y += 320) {
    // 03_rect row - triangle
    for (let x = 160; x < width; x += 640) {
      noStroke();
      fill(200, 200, 200);
      triangle03(x, y, 160, 80, 0);
    }
  }


  // column of 04_square row 01
  for (let y = 0; y < height; y += 320) {
    // 04_square row
    for (let x = 160; x < width; x += 320) {
      noStroke();
      fill(150, 150, 150);
      square(x, y, 160);
    }
  }

   // column of 04_square row 02
  for (let y = 160; y < height; y += 320) {
    // 04_square row
    for (let x = 0; x < width; x += 320) {
      noStroke();
      fill(150, 150, 150);
      square(x, y, 160);
    }
  }

  // column of 04_square row - circle 01
  for (let y = 80; y < height; y += 320) {
    // 04_square row - circle
    for (let x = 240; x < width; x += 640) {
      noStroke();
      fill(200, 200, 200);
      circle(x, y, 160);
    }
  }

    // column of 04_square row - circle 02
    for (let y = 240; y < height; y += 320) {
      // 04_square row - circle
      for (let x = 400; x < width; x += 640) {
        noStroke();
        fill(200, 200, 200);
        circle(x, y, 160);
      }
    }

    // column of 04_square row - arc
  for (let y = 240; y < height; y += 320) {
    //04_square row - semi-circle
    for (let x = 400; x < width; x += 640) {
      noStroke();
      fill(0, 0, 0);
      arc(x, y, 160, 160, 90, 180);
    }
  }
  

  // column of 04_square row - semi-circle 01
  for (let y = 80; y < height; y += 320) {
    //04_square row - semi-circle
    for (let x = 480; x < width; x += 640) {
      noStroke();
      fill(200, 200, 200);
      arc(x, y, 160, 160, 270, 450);
    }
  }

  // column of 04_square row - semi-circle 02
  for (let y = 240; y < height; y += 320) {
    //04_square row - semi-circle
    for (let x = 80; x < width; x += 640) {
      noStroke();
      fill(0, 0, 0);
      arc(x, y, 160, 160, 270, 450);
    }
  }

  // column of 05_square row 01
  for (let y = 0; y < height; y += 320) {
    // 05_square row
    for (let x = 320; x < width; x += 640) {
      noStroke();
      fill(170, 170, 170);
      square(x, y, 80);
    }
  }

  // column of 05_square row 01
  for (let y = 160; y < height; y += 320) {
    // 05_square row
    for (let x = 480; x < width; x += 640) {
      noStroke();
      fill(170, 170, 170);
      square(x, y, 80);
    }
  }

  // column of 06_square row 01
  for (let y = 0; y < height; y += 320) {
    // 06_square row
    for (let x = 400; x < width; x += 640) {
      noStroke();
      fill(120, 120, 120);
      square(x, y, 80);
    }
  }

  // column of 07_square row 01
  for (let y = 80; y < height; y += 320) {
    // 07_square row
    for (let x = 320; x < width; x += 640) {
      noStroke();
      fill(100, 100, 100);
      square(x, y, 80);
    }
  }

  // column of 07_square row 02
  for (let y = 240; y < height; y += 320) {
    // 07_square row
    for (let x = 480; x < width; x += 640) {
      noStroke();
      fill(100, 100, 100);
      square(x, y, 80);
    }
  }
  

  // column of 08_square row 01
  for (let y = 80; y < height; y += 320) {
    // 08_square row
    for (let x = 400; x < width; x += 640) {
      noStroke();
      fill(170, 170, 170);
      square(x, y, 80);
    }
  }

  // column of 08_square row 02
  for (let y = 240; y < height; y += 320) {
    // 08_square row
    for (let x = 560; x < width; x += 640) {
      noStroke();
      fill(170, 170, 170);
      square(x, y, 80);
    }
  }

    // column of 06_square row - triangle 01
    for (let y = 0; y < height; y += 320) {
      // 06_square row - triangle
      for (let x = 400; x < width; x += 640) {
        noStroke();
        fill(220, 0, 200);
        triangle03(x, y, 80, 40, 45, 1.415);
      }
    }
    
  // column of 06_square row - triangle 02
for (let y = 160; y < height; y += 320) {
  // 06_square row - triangle
  for (let x = 480; x < width; x += 640) {
    noStroke();
    fill(220, 0, 200);
    triangle03(x, y, 80, 40, 45, 2.83);
  }
}

  // column of 06_square row 02
  for (let y = 160; y < height; y += 320) {
    // 06_square row
    for (let x = 560; x < width; x += 640) {
      noStroke();
      fill(120, 120, 120);
      square(x, y, 80);
    }
  }
}

function draw() {}
