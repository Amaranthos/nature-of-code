import * as p5 from "p5";

new p5((s) => {
  let pos;
  let prev;

  s.windowResized = function () {
    s.resizeCanvas(window.innerWidth, window.innerHeight);
  };

  s.setup = function () {
    s.createCanvas(window.innerWidth, window.innerHeight);
    s.pixelDensity(1);
    s.background(51);
    pos = s.createVector(s.width / 2, s.height / 2);
    prev = pos.copy();
  };

  s.draw = function () {
    s.stroke(255);
    s.strokeWeight(2);

    s.line(pos.x, pos.y, prev.x, prev.y);
    prev.set(pos);

    const r = s.random(100);
    const step = p5.Vector.random2D();
    if (r < 1) {
      step.mult(s.random(25, 100));
    } else {
      step.setMag(2);
    }

    pos.add(step);
  };
});
