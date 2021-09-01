import * as p5 from "p5";

export const Mover = function (s, x, y, m) {
  this.pos = s.createVector(x, y);
  this.vel = p5.Vector.random2D().mult(5);
  this.acc = s.createVector();
  this.mass = m;
  this.r = s.sqrt(this.mass) * 2;

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
    this.acc.add(p5.Vector.div(force, this.mass));
  };

  this.friction = function (mu = 0.1) {
    const diff = s.height / 2 - (this.pos.y + this.r);
    if (diff < 1) {
      let friction = this.vel.copy().normalize().mult(-1);
      const normal = this.mass;
      friction.setMag(mu * normal);
      this.applyForce(friction);
    }
  };

  this.drag = function (c = 0.1) {
    let drag = this.vel.copy().normalize().mult(-1);
    const speedSq = this.vel.magSq();
    drag.setMag(speedSq * c);
    this.applyForce(drag);
  };

  this.draw = function () {
    s.stroke(255);
    s.strokeWeight(2);
    s.fill(255, 100);
    s.circle(this.pos.x, this.pos.y, this.r * 2);
  };
};
