import * as p5 from "p5";
import { Mover } from "./mover";

new p5((s) => {
  const mover = new Mover(s, s.width / 2, s.height / 2);
  const gravity = s.createVector(0, 0.1);
  const wind = s.createVector(0.1, 0);

  s.windowResized = function () {
    s.resizeCanvas(window.innerWidth, window.innerHeight);
  };

  s.setup = function () {
    s.createCanvas(window.innerWidth, window.innerHeight);
    s.pixelDensity(1);
  };

  s.draw = function () {
    s.translate(s.width / 2, s.height / 2);
    s.background(0);

    mover.applyForce(gravity);

    if (s.mouseIsPressed) {
      mover.applyForce(wind);
    }

    mover.update();
    mover.edges();
    mover.draw();
  };
});
