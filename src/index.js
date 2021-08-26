import * as p5 from "p5";
import { Mover } from "./mover";

new p5((s) => {
  const moverA = new Mover(s, -150, 0, 4);
  const moverB = new Mover(s, 150, 0, 2);
  const gravity = s.createVector(0, 0.2);
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

    const weightA = p5.Vector.mult(gravity, moverA.mass);
    const weightB = p5.Vector.mult(gravity, moverB.mass);
    moverA.applyForce(weightA);
    moverB.applyForce(weightB);

    if (s.mouseIsPressed) {
      moverA.applyForce(wind);
      moverB.applyForce(wind);
    }

    moverA.update();
    moverA.edges();
    moverA.draw();

    moverB.update();
    moverB.edges();
    moverB.draw();
  };
});
