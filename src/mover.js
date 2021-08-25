import * as p5 from "p5";

export const Mover = function (s, x, y) {
  this.s = s;
  this.pos = s.createVector(x, y);
  this.vel = s.createVector();
  this.acc = s.createVector();

  this.update = function () {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  };

  this.edges = function () {
    const halfHeight = s.height / 2;
    if (this.pos.y > halfHeight) {
      this.pos.y = halfHeight;
      this.vel.y *= -1;
    }
    if (this.pos.y < -halfHeight) {
      this.pos.y = -halfHeight;
      this.vel.y *= -1;
    }

    const halfWidth = s.width / 2;
    if (this.pos.x > halfWidth) {
      this.pos.x = halfWidth;
      this.vel.x *= -1;
    }
    if (this.pos.x < -halfWidth) {
      this.pos.x = -halfWidth;
      this.vel.x *= -1;
    }
  };

  this.applyForce = function (force) {
    this.acc.add(force);
  };

  this.draw = function () {
    this.s.stroke(255);
    this.s.strokeWeight(2);
    this.s.fill(255, 100);
    this.s.ellipse(this.pos.x, this.pos.y, 32);
  };
};
