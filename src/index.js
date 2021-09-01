import * as p5 from "p5";
import { Mover } from "./mover";
import { Attractor } from "./attractor";

const moverCount = 10;
const moverMaxWeight = 50;
const attractorCount = 1;
const attractorMaxWeight = 50;

const G = 5;

new p5((s) => {
  const movers = [];
  const attractors = [];

  let cW = window.innerWidth / 2;
  let cH = window.innerHeight / 2;

  s.windowResized = function () {
    s.resizeCanvas(window.innerWidth, window.innerHeight);
    cW = window.innerWidth / 2;
    cH = window.innerHeight / 2;
  };

  s.setup = function () {
    s.createCanvas(window.innerWidth, window.innerHeight);
    s.pixelDensity(1);
    s.background(0);

    for (let idx = 0; idx < moverCount; idx++) {
      movers.push(new Mover(s, s.random(-cW, cW), s.random(-cW, cW), 50));
    }
    for (let idx = 0; idx < attractorCount; idx++) {
      attractors.push(new Attractor(s, 0, 0, 50));
    }
  };

  s.draw = function () {
    s.translate(s.width / 2, s.height / 2);
    s.background(0, 5);

    movers.forEach((m) => {
      m.update();
      m.draw();
    });

    attractors.forEach((a) => {
      movers.forEach((m) => {
        a.attract(m, G);
      });
      a.draw();
    });
  };
});
