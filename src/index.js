import * as p5 from "p5";
import { Walker } from "./walker";

new p5((s) => {
  s.windowResized = function () {
    s.resizeCanvas(window.innerWidth, window.innerHeight);
  };

  s.setup = function () {
    s.createCanvas(window.innerWidth, window.innerHeight);
    s.pixelDensity(1);
  };

  s.draw = function () {
    s.background(0);
    s.translate(s.width / 2, s.height / 2);

    let pos = s.createVector(s.width / 2, s.height / 2);
    let mouse = s.createVector(s.mouseX, s.mouseY);

    let v = p5.Vector.sub(mouse, pos).normalize().mult(100);

    s.strokeWeight(4);
    s.stroke(255);
    s.line(0, 0, v.x, v.y);
  };
});
