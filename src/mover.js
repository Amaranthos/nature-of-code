import * as p5 from "p5";

export const Mover = function (s, x, y, r) {
  this.s = s;
  this.r = r;
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
    if (this.pos.y > halfHeight - this.r) {
      this.pos.y = halfHeight - this.r;
      this.vel.y *= -1;
    }
    if (this.pos.y < -halfHeight + this.r) {
      this.pos.y = -halfHeight + this.r;
      this.vel.y *= -1;
    }

    const halfWidth = s.width / 2;
    if (this.pos.x > halfWidth - this.r) {
      this.pos.x = halfWidth - this.r;
      this.vel.x *= -1;
    }
    if (this.pos.x < -halfWidth + this.r) {
      this.pos.x = -halfWidth + this.r;
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
    this.s.circle(this.pos.x, this.pos.y, r * 2);
  };
};
