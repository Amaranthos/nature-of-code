export class Vec {
  constructor(...elements) {
    this.v = [].concat(elements || []).flat();
  }

  get x() {
    return this.v[0] && this.v[0];
  }

  set x(v) {
    this.v[0] = v;
  }

  get y() {
    return this.v[1] && this.v[1];
  }

  set y(v) {
    this.v[1] = v;
  }

  /**
   * @param {Vec} vec
   */
  add = vec => new Vec(this.v.map((v, i) => v + vec.v[i]));
  minus = vec => new Vec(this.v.map((v, i) => v - vec.v[i]));
  multiply = s => new Vec(this.v.map(v => v * s));
  divide = s => new Vec(this.v.map(v => v / s));

  magnitude = () => Math.sqrt(this.v.reduce((s, v) => s + v * v, 0));
  normalized = () => {
    const magnitude = this.magnitude();
    return magnitude === 0 ? Vec.zero(this.v.length) : this.divide(magnitude);
  };

  equals = vec =>
    this.v.length === vec.v.length &&
    this.v.reduce((p, c, i) => p && c === vec.v[i], true);

  toString = () => `[${this.v.toString()}]`;

  static zero = (l = 2) => new Vec(Array(l).fill(0));
}
