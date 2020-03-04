import { random } from "./random";
import { ctx } from "./context";
import { Vec } from "./vec";

/**
 *
 * @param {number} width
 * @param {number} height
 */
export class Walker {
  constructor(width, height) {
    this.position = new Vec(width / 2, height / 2);
    this.velocity = this.dt = 0;
  }

  draw() {
    ctx.draw.point(this.position.x, this.position.y, 2);
  }

  /**
   * Makes a step in a random direction
   */
  step() {
    const dist = random.noise.perlin(this.dt, 0, 0) * 3;

    this.position.x += random.inclusiveRange(-1, 1) * dist;
    this.position.y += random.inclusiveRange(-1, 1) * dist;

    this.dt += 0.1;
  }
}
