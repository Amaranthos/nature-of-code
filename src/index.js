import * as p5 from "p5";
import { Walker } from "./walker";

new p5((s) => {
  s.windowResized = function () {
    s.resizeCanvas(window.innerWidth, window.innerHeight);
  };

  s.setup = function () {
    s.createCanvas(window.innerWidth, window.innerHeight);
    s.pixelDensity(1);
    s.background(0);
  };

  s.draw = function () {
    s.translate(s.width / 2, s.height / 2);

    let v = p5.Vector.random2D().mult(100);

    s.strokeWeight(4);
    s.stroke(255);
    s.line(0, 0, v.x, v.y);
  };
});
