import * as p5 from "p5";

export const Attractor = function (s, x, y, m) {
  this.pos = s.createVector(x, y);
  this.mass = m;
  this.r = s.sqrt(this.mass) * 2;

  this.attract = function (mover, G) {
    const dir = p5.Vector.sub(this.pos, mover.pos);
    const distSq = s.constrain(dir.magSq(), 100, 1000);
    const strength = G * ((this.mass * mover.mass) / distSq);
    const force = dir.copy().setMag(strength);

    mover.applyForce(force);
  };

  this.draw = function () {
    s.noStroke();
    s.fill(255, 0, 100);
    s.circle(this.pos.x, this.pos.y, this.r * 2);
  };
};
