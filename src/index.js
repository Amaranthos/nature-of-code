import * as p5 from "p5";

let xOffset = 0;

new p5((s) => {
  s.setup = function () {
    s.createCanvas(400, 400);
  };

  s.draw = function () {
    s.background(51);

    const x = s.map(s.noise(xOffset), 0, 1, 0, s.width);

    s.ellipse(x, 200, 24, 24);

    xOffset += 0.01;
  };
});
