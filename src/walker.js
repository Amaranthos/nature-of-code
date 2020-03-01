import { random } from "./random";
import { switchcase } from "./utility";
import { ctx } from "./context";

/**
 *
 * @param {number} width
 * @param {number} height
 */
export class Walker {
  constructor(width, height) {
    this.x = width / 2;
    this.y = height / 2;

    this.dt = 0;
  }

  draw() {
    ctx.draw.point(this.x, this.y, 2);
  }

  /**
   * Makes a step in a random direction
   */
  step() {
    const dist = random.noise.perlin(this.dt, 0, 0) * 3;

    this.x += random.inclusive_range(-1, 1) * dist;
    this.y += random.inclusive_range(-1, 1) * dist;

    this.dt += 0.1;
  }
}
