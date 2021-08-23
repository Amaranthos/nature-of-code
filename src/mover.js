import * as p5 from "p5";

export const Mover = function (s, x, y) {
  this.s = s;
  this.pos = s.createVector(x, y);
  this.vel = p5.Vector.random2D().mult(s.random(3));

  this.update = function () {
    this.acc = p5.Vector.random2D();
    // this.acc.setMag(0.01);
    this.vel.add(this.acc).limit(2);
    this.pos.add(this.vel);
  };

  this.draw = function () {
    this.s.stroke(255);
    this.s.strokeWeight(2);
    this.s.fill(255, 100);
    this.s.ellipse(this.pos.x, this.pos.y, 32);
  };
};
