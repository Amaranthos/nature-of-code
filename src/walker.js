export const Walker = function (s, x, y) {
  this.s = s;
  this.pos = s.createVector(x, y);
  this.vel = s.createVector(1, -1);

  this.update = function () {
    this.pos = this.pos.add(this.vel);
  };

  this.draw = function () {
    this.s.stroke(255);
    this.s.strokeWeight(2);
    this.s.fill(255, 100);
    this.s.ellipse(this.pos.x, this.pos.y, 32);
  };
};
