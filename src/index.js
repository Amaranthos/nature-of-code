import * as p5 from "p5";
import { Walker } from "./walker";

new p5((s) => {
  const walker = new Walker(
    s.createVector(window.innerWidth * 0.5, window.innerHeight * 0.5)
  );

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
    s.point(walker.pos.x, walker.pos.y);
    walker.update(s.createVector(s.random(-1, 1), s.random(-1, 1)));
  };
});
