import * as p5 from "p5";

const inc = 0.01;

let x = window.innerWidth * 0.5;
let y = window.innerHeight * 0.5;

new p5((s) => {
  s.windowResized = function () {
    s.resizeCanvas(window.innerWidth, window.innerHeight);
    s.background(51);
  };

  s.setup = function () {
    s.createCanvas(window.innerWidth, window.innerHeight);
    s.pixelDensity(1);
    s.background(51);
  };

  s.draw = function () {
    s.stroke(255);
    s.strokeWeight(2);
    s.point(x, y);

    const r = s.floor(s.random(4));

    switch (r) {
      case 0:
        x--;
        break;
      case 1:
        x++;
        break;
      case 2:
        y--;
        break;
      case 3:
        y++;
        break;
    }
  };
});
