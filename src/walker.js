export const Walker = function (pos) {
  this.pos = pos;

  this.update = function (next) {
    this.pos = this.pos.add(next);
  };
};
