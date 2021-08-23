import * as p5 from "p5";
import { Mover } from "./mover";

new p5((s) => {
  const mover = new Mover(s, s.width / 2, s.height / 2);

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

    mover.update();
    mover.draw();
  };
});
