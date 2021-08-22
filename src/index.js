import * as p5 from "p5";
import { Walker } from "./walker";

new p5((s) => {
  const walker = new Walker(
    s,
    window.innerWidth * 0.5,
    window.innerHeight * 0.5
  );

  s.windowResized = function () {
    s.resizeCanvas(window.innerWidth, window.innerHeight);
    s.background(51);
  };

  s.setup = function () {
    s.createCanvas(window.innerWidth, window.innerHeight);
    s.pixelDensity(1);
  };

  s.draw = function () {
    s.background(51);
    walker.update();
    walker.draw();
  };
});
