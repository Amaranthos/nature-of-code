import * as p5 from "p5";
import { Mover } from "./mover";

const moverCount = 10;
const moverMaxWeight = 8;

new p5((s) => {
  const movers = [];
  const gravity = s.createVector(0, 0.2);
  const wind = s.createVector(0.1, 0);

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

    for (let idx = 0; idx < moverCount; idx++) {
      movers.push(
        new Mover(s, s.random(-cW, cW), 0, s.random(1, moverMaxWeight))
      );
    }
  };

  s.draw = function () {
    s.translate(s.width / 2, s.height / 2);
    s.background(0);

    s.fill(255, 50);
    s.noStroke();
    s.rect(-s.width / 2, s.height / 4, s.width, s.height / 4);

    movers.forEach((m) => {
      m.applyForce(p5.Vector.mult(gravity, m.mass));

      if (s.mouseIsPressed) {
        m.applyForce(wind);
      }

      if (m.pos.y > s.height / 4) {
        m.drag(0.1);
      }
      m.friction();
      m.update();
      m.edges();
      m.draw();
    });
  };
});
