import * as p5 from "p5";

let start = 0;
const inc = 0.005;

new p5((s) => {
  s.setup = function () {
    s.createCanvas(400, 400);
  };

  s.draw = function () {
    s.background(51);

    s.stroke(255);
    s.noFill();

    let xOff = start;
    s.beginShape();
    for (let x = 0; x < s.width; x++) {
      s.stroke(255);
      const y = s.noise(xOff) * s.height;
      s.vertex(x, y);

      xOff += inc;
    }
    s.endShape();

    start += inc;

    // s.noLoop();
  };
});
